module.exports = function(ctx, videoFilename) {
  const videoPath = 'content/video/' + videoFilename 
  ctx.replyWithVideo({ source: videoPath }).catch((err) => console.log(err))
}

