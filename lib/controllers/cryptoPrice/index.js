const axios = require('axios')
module.exports = function(ctx) {
  const text = ctx.update.message.text
  const arguments = text.split(" ")

  if(!arguments[1]) return ctx.reply("Usage:\n/cc <CRIPTOCODE>")
  const cryptoCode = arguments[1].toUpperCase()

  const url = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCode + "&tsyms=GBP,USD,EUR"
  axios.get(url).then((response) => {
    if(response.data.Response==="Error"){
      return ctx.reply(response.data.Message)
    }

    const txt = '\n' +
      cryptoCode + ' preus:\n' +
      ' $ ' + response.data.USD + '\n' +
      ' € ' + response.data.EUR + '\n' +
      ' £ ' + response.data.GBP + '\n';
    return ctx.reply(txt).catch((err) => console.log(err))
  }) 
}
