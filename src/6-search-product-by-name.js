const stockProducts = require('./data.json');



const searchProductByName = (search) => {

 if (!search) return null;
 
  // método find() : Essa função verifica se o nome do produto (convertido para minúsculas) é igual ao nome do produto a ser buscado (também convertido para minúsculas).
 const produto = stockProducts.find(produto => produto.productName.toLowerCase() === search.toLowerCase());

if(!produto) return null;

return {

  description: produto.description,
  formattedPrice: `R$ ${produto.price.toFixed(2)}`


}


};

module.exports = { searchProductByName };


