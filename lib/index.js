const dotenv = require('dotenv').config()
const Telegraf = require('telegraf')
const patterns = require('./patterns')

const bot = new Telegraf(process.env.TOKEN)

function debuginfo(ctx){
  const from = ctx.update.message.from.first_name
  const text = ctx.update.message.text 
  const chatId = ctx.update.message.chat.id
  console.log('-')
  console.log('name', from)
  console.log('chatId', chatId)
  console.log('test', text)
  console.log('>')
}

bot.on('message', (ctx) => {
  if(process.env.DEBUG) debuginfo(ctx)
  if(!text) return
  patterns(ctx, text)
})

bot.startPolling()
