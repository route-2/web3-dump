

var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')
const env = require('dotenv').config()

const web3 = new Web3('https://goerli.infura.io/v3/')

const account1 = '' 
const account2 = ''

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2,'hex')

console.log(privateKey1)
web3.eth.getTransactionCount(account1, (err, txCount) => {
  
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }
   const tx = new Tx(txObject,{chain:'goerli'})
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    
  })
})