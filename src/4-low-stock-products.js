const stockProducts = require('./data.json');
/*console.log(stockProducts)*/
const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...

  let lowStock = []
  for(let index = 0 ; index < stockProducts.length; index++){

    let product = stockProducts[index]

    if( product.quantityInStock > 0 && product.quantityInStock <= 10 ){

      lowStock.push(String( `${product.productName}: ${product.quantityInStock} unidades`))

    }
  }
  return lowStock

};

module.exports = { getLowStockProducts };
