const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...

  // crio uma const que recebe uma array vazia para que  no final os produtos sejam armazenados nela

  let productList = []
   // crio um loop for para percorrer todo o stockProducts
 for( let index = 0 ; index < stockProducts.length ; index+=1){
  let products = stockProducts[index]
   // crio uma condição para que lançar todas as strings com a chave productName dentro da array productlist onde:

    // se houver uma chave productName em products e os valores dessa chave for do tipo string...
    if( 'productName' in products && typeof products.productName === 'string'){
      
      // lance  todos os productName dentro da minha array  productList
      productList.push(products.productName)
    }

   
}
return productList

};
console.log(getUniqueProductsName())

module.exports = { getUniqueProductsName };
