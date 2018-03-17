function getRandomInteger(min, max){
   return parseInt(Math.random() * (max - min) + min)
}

module.exports = (ctx) => {
  const text = ctx.update.message.text
  const arguments = text.split(" ")

  console.log(arguments)

  if(arguments.length===2){
    const max = parseInt(arguments[1])
    const result = getRandomInteger(1, max)
    return ctx.reply(result)
  }

  const result = getRandomInteger(1, 20)
  return ctx.reply(result)
}
