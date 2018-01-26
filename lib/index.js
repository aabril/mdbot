const Telegraf = require('telegraf')
const patterns = require('./patterns')

// todo: put this on a env config file // .env 
const DEBUG = true
const token = '511429893:AAEg7CrE0JTWCJUp31cD_tKnfvAvyG-K_0A' // @test46740bot 

const bot = new Telegraf(token)

bot.on('message', (ctx) => {
  const from = ctx.update.message.from
  const text = ctx.update.message.text 
  const chatId = ctx.update.message.chat.id

  if(DEBUG) {
    console.log('ctx.update.message.from', from)
    console.log('ctx.update.message.chat.Id', chatId)
    console.log('ctx.update.message.text', text)
  }

  if(!text) return
  patterns(ctx, text)
})

bot.startPolling()
