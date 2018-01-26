const Telegraf = require('telegraf')
const patterns = require('./patterns')

// todo: put this on a env config file // .env 
const DEBUG = true
const token = '510500699:AAEAf_fGn0u9mAocdMeSUP5YQLb1fatnz4U' // process.env.BOT_TOKEN

const bot = new Telegraf(token)

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
  patterns(text)
})

bot.startPolling()
