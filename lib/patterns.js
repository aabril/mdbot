const package = require('../package.json')

const cryptoPrice = require('./controllers/cryptoPrice')
const sendAudio = require('./controllers/sendAudio')
const sendPhoto = require('./controllers/sendPhoto')
const cunyado = require('./controllers/cunyado')
const kalebarraka = require('./controllers/kalebarraka')
const cryptoGraphs = require('./controllers/cryptoGraphs')


module.exports = function(ctx, text){

  if(text.match(/bitcoin/)) cryptoPrice.pattern(ctx, 'BTC')
  if(text.match(/ethereum/)) cryptoPrice.pattern(ctx, 'ETH')
  if(text.match(/neo/)) cryptoPrice.pattern(ctx, 'NEO')

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

  if(text.match(/valencia/i)) cunyado.valencia(ctx)
  if(text.match(/valència/i)) cunyado.valencia(ctx)

  if(text.match(/badum/i)) sendAudio(ctx, 'badum.mp3')

  // commands (standalone)
  if(text.match('version') ctx.reply(package.version))
  if(text.match('kale') kalebarraka(ctx))
  if(text.match('/help') help(ctx))


  // commands (arguments)
  if(text.startsWith('cc ') cryptoPrice.code(ctx)
  if(text.startsWith('gg ', cryptoGraphs(ctx)))

}
