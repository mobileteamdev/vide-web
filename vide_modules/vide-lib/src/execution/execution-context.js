'use strict'
var Web3 = require('web3')
var EventManager = require('../eventManager')
var EthJSVM = require('ethereumjs-vm')
var ethUtil = require('ethereumjs-util')
var StateManager = require('ethereumjs-vm/dist/stateManager')
var Web3VMProvider = require('../web3Provider/web3VmProvider')

var rlp = ethUtil.rlp

var injectedProvider

var web3
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  injectedProvider = window.web3.currentProvider
  web3 = new Web3(injectedProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

var blankWeb3 = new Web3()

/*
  extend vm state manager and instanciate VM
*/

class StateManagerCommonStorageDump extends StateManager {
  constructor (arg) {
    super(arg)
    this.keyHashes = {}
  }

  putContractStorage (address, key, value, cb) {
    this.keyHashes[ethUtil.sha3(key).toString('hex')] = ethUtil.bufferToHex(key)
    super.putContractStorage(address, key, value, cb)
  }

  dumpStorage (address, cb) {
    var self = this
    this._getStorageTrie(address, function (err, trie) {
      if (err) {
        return cb(err)
      }
      var storage = {}
      var stream = trie.createReadStream()
      stream.on('data', function (val) {
        var value = rlp.decode(val.value)
        storage['0x' + val.key.toString('hex')] = {
          key: self.keyHashes[val.key.toString('hex')],
          value: '0x' + value.toString('hex')
        }
      })
      stream.on('end', function () {
        cb(storage)
      })
    })
  }
}

var stateManager = new StateManagerCommonStorageDump({})
var vm = new EthJSVM({
  enableHomestead: true,
  activatePrecompiles: true
})

// FIXME: move state manager in EthJSVM ctr
vm.stateManager = stateManager
vm.blockchain = stateManager.blockchain
vm.trie = stateManager.trie
vm.stateManager.checkpoint()

var web3VM = new Web3VMProvider()
web3VM.setVM(vm)

var mainNetGenesisHash = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3'

/*
  trigger contextChanged, web3EndpointChanged
*/
function ExecutionContext () {
  var self = this
  this.event = new EventManager()

  var executionContext = null

  this.blockGasLimitDefault = 4300000
  this.blockGasLimit = this.blockGasLimitDefault
  this.customNetWorks = {}

  this.init = function (config) {
    executionContext = 'injected';//vide
  }

  this.getProvider = function () {
    return executionContext
  }

  this.isVM = function () {
    return executionContext === 'vm'
  }

  this.web3 = function () {
    return this.isVM() ? web3VM : web3
  }

  this.detectNetwork = function (callback) {
	const net = getNetwork();
	const id = net;
	if(net == 0)name = "can't detect connex"//vide
	else if(net == 1)name = 'Mainnet'
	else if(net == 2)name = 'Testnet'
	else name = 'Unknown'
	callback(null, { id, name })
  }

  this.removeProvider = function (name) {
    if (name && this.customNetWorks[name]) {
      delete this.customNetWorks[name]
      self.event.trigger('removeProvider', [name])
    }
  }

  this.addProvider = function (network) {
    if (network && network.name && network.url) {
      this.customNetWorks[network.name] = network
      self.event.trigger('addProvider', [network])
    }
  }

  this.internalWeb3 = function () {
    return web3
  }

  this.blankWeb3 = function () {
    return blankWeb3
  }

  this.vm = function () {
    return vm
  }

  this.setContext = function (context, endPointUrl, confirmCb, infoCb) {
    executionContext = context
    this.executionContextChange(context, endPointUrl, confirmCb, infoCb)
  }

  this.executionContextChange = function (context, endPointUrl, confirmCb, infoCb, cb) {
    if (!cb) cb = () => {}
	context = 'injected';//vide
	executionContext = context;
	self.event.trigger('contextChanged', ['injected'])
	return cb()
  }

  this.currentblockGasLimit = function () {
    return this.blockGasLimit
  }

  this.stopListenOnLastBlock = function () {
    if (this.listenOnLastBlockId) clearInterval(this.listenOnLastBlockId)
    this.listenOnLastBlockId = null
  }

  this._updateBlockGasLimit = function () {//vide
  }

  this.listenOnLastBlock = function () {
    this.listenOnLastBlockId = setInterval(() => {
      this._updateBlockGasLimit()
    }, 15000)
  }

  // TODO: not used here anymore and needs to be moved
  function setProviderFromEndpoint (endpoint, context, cb) {
    var oldProvider = web3.currentProvider

    if (endpoint === 'ipc') {
      web3.setProvider(new web3.providers.IpcProvider())
    } else {
      web3.setProvider(new web3.providers.HttpProvider(endpoint))
    }
    if (web3.isConnected()) {
      executionContext = context
      self._updateBlockGasLimit()
      self.event.trigger('contextChanged', ['web3'])
      self.event.trigger('web3EndpointChanged')
      cb()
    } else {
      web3.setProvider(oldProvider)
      var alertMsg = 'Not possible to connect to the Web3 provider. '
      alertMsg += 'Make sure the provider is running and a connection is open (via IPC or RPC).'
      cb(alertMsg)
    }
  }
  this.setProviderFromEndpoint = setProviderFromEndpoint;

  this.txDetailsLink = function (network, hash) {
	  	var explore = 'insight';
		var isSync = navigator.userAgent.indexOf(' Sync/')!==-1;
		if(!isSync && network !== 'Mainnet')explore = 'veforge';
		if(transactionDetailsLinks[explore][network]) {//vide
			return transactionDetailsLinks[explore][network] + hash;
		}
  }
}
var transactionDetailsLinks = {
	'insight':{
		'Mainnet': 'https://insight.vecha.in/#/txs/',
		'Testnet': 'https://insight.vecha.in/#/txs/',
		'Unknown': 'https://insight.vecha.in/#/txs/'
	},
	'veforge':{
		'Mainnet': 'https://explore.veforge.com/transactions/',
		'Testnet': 'https://testnet.veforge.com/transactions/',
		'Unknown': 'https://testnet.veforge.com/transactions/'
	}
}

module.exports = new ExecutionContext()
