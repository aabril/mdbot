module.exports = function(ctx, imageFilename) {
  const photoPath = 'content/images/' + imageFilename
  ctx.replyWithPhoto({ source: photoPath })
}
