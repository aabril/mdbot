const fs = require('fs')

export.gabachos = function displayAudioGabachos(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/gabachos.mp3'), caption: 'pistacho' })
    .catch((err) => {
       console.log(err)
    })
}

export.pistacho = function displayAudioPistacho(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/pistacho.mp3'), caption: 'pistacho' })
    .catch((err) => {
       console.log(err)
    })
}

export.iuu = function displayAudioIuu(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/iuuu.mp3'), caption: 'iuuu' })
    .catch((err) => {
       console.log(err)
    })
}

export.asco = function displayAudioQueAsco(ctx) {
  ctx
    .replyWithAudio({ source: fs.readFileSync('/home/nvm/apps/parcerisbot/queascoche.mp3'), caption: 'asco' })
    .catch((err) => {
       console.log(err)
    })
}