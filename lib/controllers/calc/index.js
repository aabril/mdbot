const math = require('mathjs')

module.exports = (ctx) => {
 const text = ctx.update.message.text.slice(5)
 const result = math.eval(text)
 return ctx.reply(result)
}
