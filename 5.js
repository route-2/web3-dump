var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')
const env = require('dotenv').config()

const web3 = new Web3('https://goerli.infura.io/v3/')

const account1 = '' 
const account2 = ''

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1,'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2,'hex')

const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: data
  }
