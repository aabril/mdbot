const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, "../../", 'contents/audios/')

module.exports.gabachos = function displayAudioGabachos(ctx) {
  const filepath = basePath + "gabachos.mp3"
  ctx
    .replyWithAudio({ source: fs.readFileSync(filepath), caption: 'pistacho' })
    .catch((err) => { console.log(err) })
}

module.exports.pistacho = function displayAudioPistacho(ctx) {
  const filepath = basePath + "pistacho.mp3"
  ctx
    .replyWithAudio({ source: fs.readFileSync(filepath), caption: 'pistacho' })
    .catch((err) => { console.log(err) })
}

module.exports.iuu = function displayAudioIuu(ctx) {
  const filepath = basePath + "iuu.mp3"
  ctx
    .replyWithAudio({ source: fs.readFileSync(filepath), caption: 'pistacho' })
    .catch((err) => { console.log(err) })
}

module.exports.asco = function displayAudioQueAsco(ctx) {
  const filepath = basePath + "queasco.mp3"
  ctx
    .replyWithAudio({ source: fs.readFileSync(filepath), caption: 'pistacho' })
    .catch((err) => { console.log(err) })
}
