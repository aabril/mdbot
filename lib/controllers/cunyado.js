const frasesCunyado = [
  'Ni de izquierdas ni de derechas, yo soy español',
  'Albert Rivera me parece un tipo que sabe lo que dice',
  'Hitler también ganó las elecciones',
  'Toros Si. Cava catalán No!'
]

const frasesCunyadoFacha = [
  'Lo que me faltaba. Ahora por ser franquista también eres facha'
]

const frasesCunyadoCatalunya = [
  'Por que los catalanes voten mal no tenemos que pagar el pato todos los españoles de bien',
  'Si Puigdemon quiere ser presidente de Cataluña peus que monte un partido político y gane las elecciones. Vamos, digo yo.',
  'Puigdemont es un preso fugado de la justícia que lo que busca es que le detengan. A mi no me engaña',
  'El presidente de CataluÑa es algo que deberíamos poder elegir todos los españoles y no solo el PDeCat y ERC.',
]

module.exports.standard = function displayCunyado(ctx) {
   const pos = Math.floor(Math.random() * Math.floor(frasesCunyado.length))
   const frase = frasesCunyado[pos]
   ctx.reply(frase)
}

module.exports.catalunya = function displayCunyadoCatalunya(ctx) {
   const pos = Math.floor(Math.random() * Math.floor(frasesCunyadoCatalunya.length))
   const frase = frasesCunyadoCatalunya[pos]
   ctx.reply(frase)
}

module.exports.espanya = function displayCunyadoFacha(ctx) {
   const pos = Math.floor(Math.random() * Math.floor(frasesCunyadoFacha.length))
   const frase = frasesCunyadoFacha[pos]
   ctx.reply(frase)
}
