module.exports.dinar = function displayPhotoDinar(ctx) {
  const photoPath = 'content/dinar.jpg'
  ctx.replyWithPhoto({ source: photoPath })
}
