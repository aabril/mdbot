const axios = require('axios')

export.bitcoin = function displayPriceBitcoin(ctx) {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP,USD,EUR"
  axios.get(url).then((response) => {
      ctx.reply('El Bitcoin val ara més o menys ' + response.data.EUR  + ' € / ' + response.data.USD + ' $ / ' + response.data.GBP+ ' £')
  })  
}

export.ethereum = function displayPriceEthereum(ctx) {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP,USD,EUR"
  axios.get(url).then((response) => {
      ctx.reply('El Ethereum val ara més o menys ' + response.data.EUR  + ' € / ' + response.data.USD + ' $ / ' + response.data.GBP+ ' lliures')
  })  
}

export.neo = function displayPriceNeo(ctx) {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=GBP,USD,EUR"
  axios.get(url).then((response) => {
      ctx.reply('El Neo val ara més o menys ' + response.data.EUR  + ' € / ' + response.data.USD + ' $ / ' + response.data.GBP+ ' £')
  })  
}