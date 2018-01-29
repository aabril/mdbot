const fs = require('fs')

function readFiles(cb) {
  fs.readdir('content/images/kalebarraka/', cb);
}

function displayPhoto(ctx, imageFilename){
  const photoPath = 'content/images/kalebarraka/' + imageFilename
  ctx
    .replyWithPhoto({ source: photoPath })
    .catch((err) => {
      console.log(err)
    })
}

function getRandomFilename(files){
  const pos = Math.floor(Math.random() * Math.floor(files.length))
  return files[pos]
}

module.exports = function(ctx) {
  readFiles((err, files)=>{
    if(err) console.log(err)
    const imageFilename = getRandomFilename(files)
    displayPhoto(ctx, imageFilename)
  })
}


