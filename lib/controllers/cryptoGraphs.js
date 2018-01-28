const axios = require('axios')

module.exports = (ctx) => {
  const text = ctx.update.message.text
  const arguments = text.split(" ")

  if(arguments[1]==="help") ctx.reply('Proximament, paciència cabrons')


  const url = "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=1"

  const cbFn = (response) => {
    const data = response.data.Data

    const date = new Date(data[0].time)
    ctx.reply(date.toLocaleString())

  }


  axios
    .get(url)
    .then(cbFn)
    .catch((err) => console.log(err))
}