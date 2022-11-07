const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/183e2faa9f0448dda81629460b3d40e8')

// Get average gas price in wei from last few blocks median gas price
web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, 'ether'))
})

// Use sha256 Hashing function
console.log(web3.utils.sha3('root2'))

// Use keccak256 Hashing function (alias)
console.log(web3.utils.keccak256('root2'))

// Get a Random Hex
console.log(web3.utils.randomHex(444))

// Get access to the underscore JS library
const _ = web3.utils._

_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
  console.log(key)
})