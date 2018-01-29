const fs = require('fs')

module.exports = function(ctx, dirPath) {
  readFiles((err, files)=>{
    if(err) console.log(err)
    const imageFilename = getRandomFilename(files)
    displayPhoto(ctx, dirPath, imageFilename)
  })
}

function readFiles(cb) {
  fs.readdir('content/images/kalebarraka/', cb);
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




