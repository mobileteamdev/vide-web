'use strict'
var EthJSTX = require('ethereumjs-tx')
var EthJSBlock = require('ethereumjs-block')
var ethJSUtil = require('ethereumjs-util')
var BN = ethJSUtil.BN
var executionContext = require('./execution-context')
var EventManager = require('../eventManager')

class TxRunner {
  constructor (vmaccounts, api) {
    this.event = new EventManager()
    this._api = api
    this.blockNumber = 0
    this.runAsync = true
    if (executionContext.isVM()) {
      this.blockNumber = 1150000 // The VM is running in Homestead mode, which started at this block.
      this.runAsync = false // We have to run like this cause the VM Event Manager does not support running multiple txs at the same time.
    }
    this.pendingTxs = {}
    this.vmaccounts = vmaccounts
    this.queusTxs = []
  }

  rawRun (args, confirmationCb, gasEstimationForceSend, promptCb, cb) {
    run(this, args, Date.now(), confirmationCb, gasEstimationForceSend, promptCb, cb)
  }

  execute (args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
    var self = this

    var data = args.data
    if (data.slice(0, 2) !== '0x') {
      data = '0x' + data
    }
	self.runInNode(args, data, callback)
  }
  
//vide
runInNode (args, data, callback) {
	const self = this
	
	if(args.useCall) {
		connex.thor.account(args.to).method(args.funAbi).call(...args.funArgs).then(result=>{
			callback(null, {result: result.data})
		}).catch(function(error) {
			callback(error)
		});
	} else{
		var cb = function (err, resp) {
			self.event.trigger('transactionBroadcasted', [resp])
			var listenOnResponse = () => {
				return new Promise(async (resolve, reject) => {
					var result = await tryTillReceiptAvailable(resp);
					var tx = await tryTillTxAvailable(resp);
					resolve({
						result,
						tx,
						transactionHash: tx ? tx.id : null
					})
				})
			}
			listenOnResponse().then((txData) => { callback(null, txData) }).catch((error) => { callback(error) })
		}
	
		//
		const clause = {"to": args.to, "value": args.value || 0, "data": data}
		const commentMss = args.to ? "Transaction to "+args.contractName+"."+args.funAbi.name : "Inspector deploy CT";
		
		connex.vendor.sign('tx')
			//.signer('0x7567d83b7b8d80addcb281a71d54fc7b3364ffed') // Enforce signer
			.gas(Number(args.gasLimit)) // Set maximum gas
			//.gasPrice('1000000000000000') // 1 VeThor can buy 1000 gas
			//.link('https://testnet.veforge.com/{txid}')
			.comment(commentMss)
			.request([clause])
			.then(result=>{
				if(result && result.txid)return cb(null, result.txid);
				callback("Send transaction error")
			}).catch(function(error) {
				callback(error)
			});
	}
}
}//end TxRunner
//vide
function convertTxVetToEther(tx){
	var newTx = {};
	newTx.hash = tx.id;//hash using in many places 
	newTx.nonce = tx.nonce;//"nonce": 2 & "nonce": "0x12256df6fb"
	newTx.blockHash = tx.meta.blockID;
	newTx.blockNumber = tx.meta.blockNumber;
	//newTx.transactionIndex = ?;
	newTx.from = tx.origin;
	newTx.to = tx.clauses[0].to;//clauses[123...?]
	newTx.value = tx.clauses[0].value;
	newTx.input = tx.clauses[0].data;
	newTx.gas = tx.gas;
	newTx.gasPrice = tx.gasPriceCoef;
	return newTx;
}
function convertReceiptVetToEther(receipt){
	var newReceipt = {};
	newReceipt.status = receipt.reverted ? "0x0" : "0x1";
	newReceipt.gasUsed = receipt.gasUsed;
	newReceipt.gasPayer = receipt.gasPayer;//new
	newReceipt.blockHash = receipt.meta.blockID
	newReceipt.blockNumber = receipt.meta.blockNumber;
	newReceipt.transactionHash = receipt.meta.txID;//hash using in many places
	//newReceipt.transactionIndex = ?
	//newReceipt.logsBloom = ?
	//newReceipt.cumulativeGasUsed = ?
	newReceipt.from = receipt.meta.txOrigin;
	newReceipt.to = (receipt.outputs[0] && receipt.outputs[0].events && receipt.outputs[0].events[0]) ? receipt.outputs[0].events[0].address : null;
	newReceipt.contractAddress = receipt.outputs[0] ? receipt.outputs[0].contractAddress : null;
	newReceipt.logs = receipt.outputs[0] ? receipt.outputs[0].events : [];
	return newReceipt;
}

async function tryTillReceiptAvailable (txhash, done) {
	return new Promise((resolve, reject) => {
	  	connex.thor.transaction(txhash).getReceipt().then(async receipt=>{
			if(receipt){
				receipt = convertReceiptVetToEther(receipt);
				resolve(receipt);return;
			}
			await pause()
        	return resolve(await tryTillReceiptAvailable(txhash))
		})
	})
}
async function tryTillTxAvailable (txhash, done) {
	return new Promise((resolve, reject) => {
		connex.thor.transaction(txhash).get().then(async tx=>{
			if(tx){
				tx = convertTxVetToEther(tx);
				resolve(tx);return;
			}
			await pause()
        	return resolve(await tryTillTxAvailable(txhash))
		})
  	})
}


async function pause () { return new Promise((resolve, reject) => { setTimeout(resolve, 500) }) }

function run (self, tx, stamp, confirmationCb, gasEstimationForceSend, promptCb, callback) {
  if (!self.runAsync && Object.keys(self.pendingTxs).length) {
    self.queusTxs.push({ tx, stamp, callback })
  } else {
    self.pendingTxs[stamp] = tx
    self.execute(tx, confirmationCb, gasEstimationForceSend, promptCb, (error, result) => {
      delete self.pendingTxs[stamp]
      callback(error, result)
      if (self.queusTxs.length) {
        var next = self.queusTxs.pop()
        run(self, next.tx, next.stamp, next.callback)
      }
    })
  }
}

module.exports = TxRunner
