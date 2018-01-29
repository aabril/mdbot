const frases = require('./frases.json')

module.exports = function(ctx, section) {
  const frasesBySection = frases[section]
  if(!frasesBySection) return
  if(frasesBySection.length===0) return

  const pos = Math.floor(Math.random() * Math.floor(frasesBySection.length))
  const frase = frasesBySection[pos]
  ctx.reply(frase)
}

