const dotenv = require('dotenv').config()
const Telegraf = require('telegraf')
const patterns = require('./patterns')
const mongojs = require('mongojs')

const db = mongojs(process.env.MONGO_URI, ['messages'])

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

function saveUpdate(update){
   db.messages.save(update)
}

bot.on('message', (ctx) => {
  if(process.env.DEBUG){
    debuginfo(ctx)
  }

  if(process.env.MONGO_URI && ctx.update){
    saveUpdate(ctx.update)
  }

  const text = ctx.update.message.text
  if(text) patterns(ctx, ctx.update.message.text)
})

bot.startPolling()
