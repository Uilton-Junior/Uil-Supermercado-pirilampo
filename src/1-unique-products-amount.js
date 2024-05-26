const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  
  let amount = 0   // crio uma let amount
  // crio um loop for para percorrer todo o stockProducts
  for(let index = 0 ; index < stockProducts.length ; index++){

    // incrementa o contador a cada interação
    amount++
  }
  return amount

};

//console.log(getUniqueProductsAmount())
module.exports = { getUniqueProductsAmount };


