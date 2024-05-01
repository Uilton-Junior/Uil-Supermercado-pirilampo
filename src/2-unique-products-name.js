const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...

  // crio uma const que recebe uma array vazia para que  no final os produtos sejam armazenados nela

  let productList = []
   // crio um loop for para percorrer todo o stockProducts
 for( let index = 0 ; index < stockProducts.length ; index+=1){
  let products = stockProducts[index]

   
}
return productList

};

module.exports = { getUniqueProductsName };
