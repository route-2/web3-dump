var Tx = require('ethereumjs-tx')
var Web3 = require('web3')
const web3 = new Web3('https://goerli.infura.io/v3/')

const account1 = '0x657dD02b4EAE6Bf276747bd3B9E54aB034D9F97f' 
const account2 = '0xD6914c60FE71Dad50CabaF3070eBfc6118398810'

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1)
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2)