const fs = require('fs')

module.exports.gabachos = function displayAudioGabachos(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/gabachos.mp3'), caption: 'pistacho' })
    .catch((err) => {
       console.log(err)
    })
}

module.exports.pistacho = function displayAudioPistacho(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/pistacho.mp3'), caption: 'pistacho' })
    .catch((err) => {
       console.log(err)
    })
}

module.exports.iuu = function displayAudioIuu(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/iuuu.mp3'), caption: 'iuuu' })
    .catch((err) => {
       console.log(err)
    })
}

module.exports.asco = function displayAudioQueAsco(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/queascoche.mp3'), caption: 'asco' })
    .catch((err) => {
       console.log(err)
    })
}
