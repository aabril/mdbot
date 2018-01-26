const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, "../../", 'content/audio/')

module.exports = function(ctx, audio) {
  const filepath = basePath + audio
  ctx
    .replyWithAudio({ source: fs.readFileSync(filepath) })
    .catch((err) => { console.log(err) })
}