var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')
const env = require('dotenv').config()

const web3 = new Web3('https://goerli.infura.io/v3/')

const account1 = '' 
const account2 = ''

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2,'hex')
const contractAddress = ''
const contractABI = ''

const contract = new web3.eth.Contract(contractABI, contractAddress)




  console.log(privateKey1)
  web3.eth.getTransactionCount(account1, (err, txCount) => {

    const txObject1 = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000), 
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
        data: contract.methods.transfer(account2, 1000).encodeABI()
      }
      const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000), 
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
        data: contract.methods.transfer(account2, 1000).encodeABI()
      }
  
    const tx = new Tx(txObject)
    tx.sign(privateKey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash)
     
    })
  })
  
  
  contract.methods.balanceOf(account1).call((err, balance) => {
    console.log({ err, balance })
  })
  
 
  contract.methods.balanceOf(account2).call((err, balance) => {
    console.log({ err, balance })
  })