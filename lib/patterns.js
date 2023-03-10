const package = require('../package.json')

const help = require('./controllers/help')

const sendAudio = require('./controllers/sendAudio')
const sendPhoto = require('./controllers/sendPhoto')
const sendVideo= require('./controllers/sendVideo')
const cryptoPrice = require('./controllers/cryptoPrice')
const cryptoGraphs = require('./controllers/cryptoGraphs')
const randomQuotes = require('./controllers/randomQuotes')
const randomPhotos = require('./controllers/randomPhotos')
const diceRoll = require('./controllers/diceRoll')
const calc = require('./controllers/calc')

module.exports = function(ctx){
  const text = ctx.update.message.text
  if(!text) return 

  if(text.match(/dinar/i)) sendPhoto(ctx, 'dinar.jpg')
  if(text.match(/pim pam/i)) sendPhoto(ctx, 'lacasitos.jpg')

  //if(text.match(/^asco$/i)) sendAudio(ctx, 'queasco.mp3')
  if(text.match(/^pistacho$/i)) sendAudio(ctx, 'pistacho.mp3')
  //if(text.match(/(iuu|yiuu)/i)) sendAudio(ctx, 'iuuu.mp3')
  if(text.match(/badum/i)) sendAudio(ctx, 'badum.mp3')

  if(text.match(/(frança|francia|gabacho|francés)/i)) sendAudio(ctx, 'gabachos.mp3')
  if(text.match(/(rickroll)/i)) sendVideo(ctx, 'fartroll.mp4')

  //if(text.match(/(cunya|cuña|españ|espany)/i)) randomQuotes(ctx, 'standard')
  //if(text.match(/(catalunya|cataluña)/i)) randomQuotes(ctx, 'catalunya')
  //if(text.match(/(valencia|valència)/i)) randomQuotes(ctx, 'valencia')

  // commands (standalone)
  if(text.match(/^version$/)) ctx.reply(package.version)
  if(text.match(/^kale$/)) randomPhotos(ctx, 'content/images/kalebarraka')
  if(text.match(/^[/]?rabo$/)) randomPhotos(ctx, 'content/images/rabo')

  if(text.match(/^help$/)) help(ctx)

  // commands (arguments)
  if(text.match(/^[/]?cc /i)) cryptoPrice(ctx)
  if(text.match(/^[/]?gg /i)) cryptoGraphs(ctx)

  if(text.match(/^[/]?calc /i)) calc(ctx)
  if(text.match(/^[/]?🎲/i)) diceRoll(ctx)
}
