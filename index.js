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


function displayAudioPistacho(ctx) {
    ctx
      .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/pistacho.mp3'), caption: 'pistacho' })
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

  const text = ctx.update.message.text 
  const chatId = ctx.update.message.chat.id

  if(DEBUG) {
    console.log(chatId)
    console.log(text)
  }

  if(text.match(/bitcoin/i)) displayPriceBitcoin(ctx)
  if(text.match(/ethereum/i)) displayPriceEthereum(ctx)
  if(text.match(/neo/i)) displayPriceNeo(ctx)
  if(text.match(/dinar/i)) displayPhotoDinar(ctx)
  if(text.match(/asco/i)) displayAudioQueAsco(ctx)
  if(text.match(/pistacho/i)) displayAudioPistacho(ctx)
})

bot.startPolling()
