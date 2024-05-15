const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let out = []
  
  for( let index = 0 ; index < stockProducts.length ; index+=1){
    let product = stockProducts[index]

};

console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };
