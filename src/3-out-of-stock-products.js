const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let out = []
  
  for( let index = 0 ; index < stockProducts.length ; index+=1){
    let product = stockProducts[index]

    if(!( 'quantityInStock' in product) || typeof product.quantityInStock === 'string' || product.quantityInStock === 0){
   
    }
  
  }
 
};




module.exports = { getOutOfStockProducts };
