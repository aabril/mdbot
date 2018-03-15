function getRandomInteger(min, max){
   return parseInt(Math.random() * (max - min) + min)
}

module.exports = (ctx) => {
  ctx.reply(getRandomInteger(1,20))
}
