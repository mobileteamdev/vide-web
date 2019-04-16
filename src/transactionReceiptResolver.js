'use strict'
//

module.exports = class TransactionReceiptResolver {
	constructor () {
		this._transactionReceipts = {}
	}
	convertReceiptVetToEther(receipt){
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
	resolve (tx, cb) {
		if (this._transactionReceipts[tx.hash]) {
			return cb(null, this._transactionReceipts[tx.hash])
		}
		connex.thor.transaction(tx.hash).getReceipt().then(receipt=>{
			if(receipt){
				receipt = this.convertReceiptVetToEther(receipt);
				this._transactionReceipts[tx.hash] = receipt
				cb(null, receipt)
			} else{
				cb("error")
			}
		})
	}
}

