module.exports = (ctx) => {
  const text = ctx.update.message.text
  const arguments = text.split(" ")

  if(arguments[1]==="help") ctx.reply('Proximament, paciència cabrons')
}