module.exports.dinar = function displayPhotoDinar(ctx) {
  const photoPath = 'content/images/dinar.jpg'
  ctx.replyWithPhoto({ source: photoPath })
}
