const Telegraf = require('telegraf')
const axios = require('axios')
const fs = require('fs')
const { reply } = Telegraf

const oldSchool = require('./controllers/oldschool')
const modern = require('./controllers/modern')
const hipster = require('./controllers/hipster')

const DEBUG = true

const token = '510500699:AAEAf_fGn0u9mAocdMeSUP5YQLb1fatnz4U' // process.env.BOT_TOKEN

const bot = new Telegraf(token)

bot.command('/oldschool', (ctx) => ctx.reply('Hello'))
bot.command('/modern', ({ reply }) => reply('Yo'))
bot.command('/hipster', reply('λ'))

bot.command('/queasco', (ctx) => {
    const chatId = "-267784992"
    ctx.telegram.sendAudio(chatId, 'http://st09.ioo.cat/queascoche.mp3')
}) 

bot.command('/dinar', (ctx) => {
    const chatId = "-267784992" 
    ctx.telegram.sendPhoto(chatId, 'http://st09.ioo.cat/dinar.jpg')
})

bot.command('/dinar', (ctx) => ctx.replyWithPhoto({ source: fs.createReadStream('/home/nvm/apps/parcerisbot/dinar.jpg') }))

bot.command('/bitcoin', (ctx) => {
   displayBitcoinPrice(ctx)
})

function displayPriceBitcoin(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El Bitcoin val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars')
   })  
}

function displayPriceEthereum(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El ETHEREUM val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars')
   })  
}

function displayPriceNeo(ctx) {
   const url = "https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=BTC,USD,EUR"
   axios.get(url).then((response) => {
       ctx.reply('El NEO val ara més o menys ' + response.data.EUR  + ' euros / ' + response.data.USD + ' dolars')
   })  
}






if(DEBUG) {
  bot.on('message', (ctx) => {
    //console.log(ctx)
    const chatId = ctx.update.message.chat.id
    const text = ctx.update.message.text 

    console.log(chatId)
    console.log(text)
    
    if(text.match(/bitcoin/i)) displayPriceBitcoin(ctx)
    if(text.match(/ethereum/i)) displayPriceEthereum(ctx)
    if(text.match(/neo/i)) displayPriceNeo(ctx)
  })
}

bot.startPolling()

