const cryptoprice = require('./controllers/cryptoprice')
const sendAudio = require('./controllers/sendAudio')
const sendPhoto = require('./controllers/sendPhoto')
const cunyado = require('./controllers/cunyado')

module.exports.default = function(text){

  if(text.match(/bitcoin/i)) cryptoprice.bitcoin(ctx)
  if(text.match(/ethereum/i)) cryptoprice.ethereum(ctx)
  if(text.match(/neo/i)) cryptoprice.neo(ctx)

  if(text.match(/dinar/i)) sendPhoto.dinar(ctx)

  if(text.match(/asco/i)) sendAudio.asco(ctx)
  if(text.match(/pistacho/i)) sendAudio.pistacho(ctx)

  if(text.match(/iuu/i)) sendAudio.iuu(ctx)
  if(text.match(/yiu/i)) sendAudio.iuu(ctx)

  if(text.match(/frança/i)) sendAudio.gabachos(ctx)
  if(text.match(/francia/i)) sendAudio.gabachos(ctx)
  if(text.match(/gabacho/i)) sendAudio.gabachos(ctx)
  if(text.match(/francés/i)) sendAudio.gabachos(ctx)

  if(text.match(/cunya/i)) cunyado.standard(ctx)
  if(text.match(/cuña/i)) cunyado.standard(ctx)

  if(text.match(/espanya/i)) cunyado.espanya(ctx)
  if(text.match(/españaa/i)) cunyado.espanya(ctx)

  if(text.match(/catalun/i)) cunyado.catalunya(ctx)

}
