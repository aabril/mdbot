const dotenv = require('dotenv').config()
const Telegraf = require('telegraf')
const patterns = require('./patterns')

const bot = new Telegraf(process.env.TOKEN)

const dropOldUpdates = Telegraf.mount('message', ({ message }, next) => {
  const now = new Date().getTime() / 1000
  if (message.date > (now - 60 * 15)) {
    return next()
  }
})

bot.use(dropOldUpdates)

bot.on('message', (ctx) => {
  const from = ctx.update.message.from.first_name
  const text = ctx.update.message.text 
  const chatId = ctx.update.message.chat.id

  if(process.env.DEBUG) {
    console.log('ctx.update.message.from.first_name', from)
    console.log('ctx.update.message.chat.Id', chatId)
    console.log('ctx.update.message.text', text)
  }

  if(!text) return
  patterns(ctx, text)
})

bot.startPolling()
