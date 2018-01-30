const fs = require('fs')

module.exports = function(ctx, dirPath) {
  const readFilesCb = (err, files) => {
    if(err) console.log(err)
    files.filter(e => e !== '.gitkeep')
    const imageFilename = getRandomFilename(files)
    displayPhoto(ctx, dirPath, imageFilename)
  }
  readFiles(dirPath, readFilesCb) 
}

function readFiles(dirPath, cb) {
  fs.readdir(dirPath + '/', cb);
}

function displayPhoto(ctx, dirPath, imageFilename){
  const photoPath = dirPath + '/' + imageFilename
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




