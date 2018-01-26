const axios = require('axios')

module.exports.pattern = function(ctx, cryptoCode) {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCode + "&tsyms=GBP,USD,EUR"
  const names = {
    "ETH" : "Ethereum",
    "BTC" : "Bitcoin",
    "NEO" : "Neo"
  }

  axios.get(url).then((response) => {
      const txt = '\n' +
      'El ' + names[cryptoCode] + ' val ara més o menys:\n' +
      '  $  ' + response.data.USD + '\n' +
      '  €  ' + response.data.EUR + '\n' +
      '  £  ' + response.data.GBP + '\n'

      ctx.reply(txt)
  })  
}

module.exports.code = function(ctx) {

  const text = ctx.update.message.text
  const arguments = text.split(" ")

  if(!(arguments[0]=="cc")) return
  
  const cryptoCode = arguments[1].toUpperCase()

  const url = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCode + "&tsyms=GBP,USD,EUR"
  axios.get(url).then((response) => {
    const txt = '\n' +
    cryptoCode + ' preus:\n' +
    ' $ ' + response.data.USD + '\n' +
    ' € ' + response.data.EUR + '\n' +
    ' £ ' + response.data.GBP + '\n';
    ctx.reply(txt).catch((err) => console.log(err))
}) 
}
