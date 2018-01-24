const Telegraf = require('telegraf')
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


if(DEBUG) {
  bot.on('message', (ctx) => {
    //console.log(ctx)
    console.log(ctx.update.message.chat)
    console.log(ctx.update.message.text)
    //const chatId = "-267784992"
  })
}

bot.startPolling()

