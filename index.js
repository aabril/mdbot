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


function displayAudioQueAsco(ctx) {
    
}




function displayAudioQueAsco(ctx, chatId) {
    console.log(ctx.update.message.chat.id)
    ctx.telegram
	.sendVoice({
	    chat_id: ctx.update.message.chat.id,
	    voice: fs.createReadStream('/home/nvm/apps/parcerisbot/queascoche.mp3')
	})
	.catch((err) => {
            console.log(err)
	})
}

function displayPhotoDinar(ctx) {
    const photoPath = '/home/nvm/apps/parcerisbot/dinar.jpg'
    ctx.replyWithPhoto(ctx.update.message.chat.id, { source: fs.createReadStream(photoPath) })
}

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
    if(text.match(/dinar/i)) displayPhotoDinar(ctx)
    if(text.match(/asco/i)) displayAudioQueAsco(ctx)
  })
}

bot.startPolling()

