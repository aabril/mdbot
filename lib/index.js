const RssParser = require('rss-parser')
const Telegraf = require('telegraf')
const axios = require('axios')
const fs = require('fs')
const { reply, replyWithAudio } = Telegraf

const oldSchool = require('./controllers/oldschool')
const modern = require('./controllers/modern')
const hipster = require('./controllers/hipster')

const DEBUG = true

const token = '510500699:AAEAf_fGn0u9mAocdMeSUP5YQLb1fatnz4U' // process.env.BOT_TOKEN

const bot = new Telegraf(token)
const rssparser = new RssParser()


const frasesCunyado = [
   'Ni de izquierdas ni de derechas, yo soy español',
   'Albert Rivera me parece un tipo que sabe lo que dice',
   'Hitler también ganó las elecciones',
   'Toros Si. Cava catalán No!',
   
]

const frasesCunyadoFacha = [
'Lo que me faltaba. Ahora por ser franquista también eres facha',

]

const frasesCunyadoCatalunya = [
  'Por que los catalanes voten mal no tenemos que pagar el pato todos los españoles de bien',
  'Si Puigdemon quiere ser presidente de Cataluña peus que monte un partido político y gane las elecciones. Vamos, digo yo.',
  'Puigdemont es un preso fugado de la justícia que lo que busca es que le detengan. A mi no me engaña',
'El presidente de CataluÑa es algo que deberíamos poder elegir todos los españoles y no solo el PDeCat y ERC.',

]


function displayCunyado(ctx) {
    const pos = Math.floor(Math.random() * Math.floor(frasesCunyado.length))
    const frase = frasesCunyado[pos]
console.log(pos)
    ctx.reply(frase)
}

function displayCunyadoCatalunya(ctx) {
    const pos = Math.floor(Math.random() * Math.floor(frasesCunyadoCatalunya.length))
    const frase = frasesCunyadoCatalunya[pos]
    ctx.reply(frase)
}

function displayCunyadoFacha(ctx) {
    const pos = Math.floor(Math.random() * Math.floor(frasesCunyadoFacha.length))
    const frase = frasesCunyadoFacha[pos]
    ctx.reply(frase)
}

function displayAudioGabachos(ctx) {
    ctx
      .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/gabachos.mp3'), caption: 'pistacho' })
      .catch((err) => {
         console.log(err)
      })
}

function displayAudioPistacho(ctx) {
    ctx
      .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/pistacho.mp3'), caption: 'pistacho' })
      .catch((err) => {
         console.log(err)
      })
}

function displayAudioIuu(ctx) {
    ctx
      .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/iuuu.mp3'), caption: 'iuuu' })
      .catch((err) => {
         console.log(err)
      })
}

function displayAudioQueAsco(ctx) {
    ctx
      .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/queascoche.mp3'), caption: 'asco' })
      .catch((err) => {
         console.log(err)
      })
}

function displayPhotoDinar(ctx) {
    const photoPath = 'dinar.jpg'
    ctx.replyWithPhoto({ source: photoPath })
}

function displayPriceBitcoin(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El Bitcoin val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars / ' + response.data.GBP+ ' lliures')
   })  
}

function displayPriceEthereum(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El Ethereum val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars / ' + response.data.GBP+ ' lliures')
   })  
}

function displayPriceNeo(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=GBP,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El Neo val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars / ' + response.data.GBP+ ' lliures')
   })  
}

bot.on('message', (ctx) => {
  const from = ctx.update.message.from
  const text = ctx.update.message.text 
  const chatId = ctx.update.message.chat.id

  if(DEBUG) {
    console.log(from)
    console.log(chatId)
    console.log(text)
  }

  if(!text) return
  if(text.match(/bitcoin/i)) displayPriceBitcoin(ctx)
  if(text.match(/ethereum/i)) displayPriceEthereum(ctx)
  if(text.match(/neo/i)) displayPriceNeo(ctx)
  if(text.match(/dinar/i)) displayPhotoDinar(ctx)
  if(text.match(/asco/i)) displayAudioQueAsco(ctx)
  if(text.match(/pistacho/i)) displayAudioPistacho(ctx)

  if(text.match(/iuu/i)) displayAudioIuu(ctx)
  if(text.match(/yiu/i)) displayAudioIuu(ctx)

  if(text.match(/frança/i)) displayAudioGabachos(ctx)
  if(text.match(/francia/i)) displayAudioGabachos(ctx)
  if(text.match(/gabacho/i)) displayAudioGabachos(ctx)
  if(text.match(/francés/i)) displayAudioGabachos(ctx)

  if(text.match(/cunya/i)) displayCunyado(ctx)
  if(text.match(/cuña/i)) displayCunyado(ctx)

  if(text.match(/espanya/i)) displayCunyadoFacha(ctx)
  if(text.match(/españaa/i)) displayCunyadoFacha(ctx)

  if(text.match(/catalun/i)) displayCunyadoCatalunya(ctx)

})

bot.startPolling()
