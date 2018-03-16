module.exports = (ctx) => {
 const text = ctx.update.message.text.slice(5)
 const result = eval(text)
 return ctx.reply(result)
}
