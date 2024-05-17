const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let soma = 0
  for(let index = 0 ; index < stockProducts.length ; index+=1){
  
    let product = stockProducts[index]
    // se houver a chave 'quantityInStock' na let product e se valor for do tipo number...
    if('quantityInStock' in product && typeof product.quantityInStock === 'number'){
     
     }

  }
 
};
console.log(getProductsAmount())

module.exports = { getProductsAmount };
