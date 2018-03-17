const dotenv = require('dotenv').config()
const Telegraf = require('telegraf')
const handlePatterns = require('./patterns')
const mongojs = require('mongojs')
let db

if(process.env.MONGO_URI){
  db = mongojs(process.env.MONGO_URI, ['messages'])
}

const bot = new Telegraf(process.env.TOKEN)
bot.on('message', onMessage)
bot.startPolling()

function onMessage(ctx) {
  debuginfo(ctx)
  saveUpdate(ctx)
  handlePatters(ctx)
}

function debuginfo(ctx) {
  if(process.env.DEBUG) {
    const from = ctx.update.message.from.first_name
    const text = ctx.update.message.text 
    const chatId = ctx.update.message.chat.id
    console.log('-')
    console.log('name', from)
    console.log('chatId', chatId)
    console.log('test', text)
    console.log('>')
  }
}

function saveUpdate(ctx){
  if(process.env.MONGO_URI && ctx.update){
    db.messages.save(ctx.update)
  }
}

