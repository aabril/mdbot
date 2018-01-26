const cryptoprice = require('./controllers/cryptoprice')
const sendAudio = require('./controllers/sendAudio')
const sendPhoto = require('./controllers/sendPhoto')
const cunyado = require('./controllers/cunyado')

module.exports = function(ctx, text){

  if(text.match(/bitcoin/i)) cryptoprice.bitcoin(ctx)
  if(text.match(/ethereum/i)) cryptoprice.ethereum(ctx)
  if(text.match(/neo/i)) cryptoprice.neo(ctx)

  if(text.match(/dinar/i)) sendPhoto(ctx, 'dinar.jpg')
  if(text.match(/pim pam/i)) sendPhoto(ctx, 'lacasitos.jpg')

  if(text.match(/asco/i)) sendAudio(ctx, 'queasco.mp3')
  if(text.match(/pistacho/i)) sendAudio(ctx, 'pistacho.mp3')

  if(text.match(/iuu/i)) sendAudio(ctx, 'iuuu.mp3')
  if(text.match(/yiu/i)) sendAudio(ctx, 'iuuu.mp3')

  if(text.match(/frança/i)) sendAudio(ctx, 'gabachos.mp3')
  if(text.match(/francia/i)) sendAudio(ctx, 'gabachos.mp3')
  if(text.match(/gabacho/i)) sendAudio(ctx, 'gabachos.mp3')
  if(text.match(/francés/i)) sendAudio(ctx, 'gabachos.mp3')

  if(text.match(/cunya/i)) cunyado.standard(ctx)
  if(text.match(/cuña/i)) cunyado.standard(ctx)

  if(text.match(/espanya/i)) cunyado.espanya(ctx)
  if(text.match(/españaa/i)) cunyado.espanya(ctx)

  if(text.match(/catalun/i)) cunyado.catalunya(ctx)

  if(text.match(/\/version/)) ctx.reply('0.2.0')

}
