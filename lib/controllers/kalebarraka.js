const files = [
  "DT2xL5RXcAI1Ebc.jpg",
  "DT6fqSzX4AEdfBR.jpg",
  "DUJZODLW4AACFWV.jpg",
  "DUKtVs9XUAAqrkw.jpg",
  "DULCPVBXUAA22nC.jpg",
  "DULMMq_W0AAvTQk.jpg",
  "DULf2X5WkAA_05a.jpg",
  "DUQN_PEW4AE5vTM.jpg",
  "DUQpnKPXUAgh766.jpg",
  "DUS_OBNWsAAkt3z.jpg"
]

function displayPhoto(ctx, imageFilename){
  const photoPath = 'content/images/kalebarraka/' + imageFilename
  ctx.replyWithPhoto({ source: photoPath })
}

function getRandomFilename(){
  const pos = Math.floor(Math.random() * Math.floor(files.length))
  const file = files[pos]
}

module.exports = function(ctx) {
  const imageFilename = getRandomFilename()
  displayPhoto(ctx, imageFilename)
}


