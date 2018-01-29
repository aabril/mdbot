const helpText = `
Hola madafackers, aci la llista de commands:

# Patrons
> simplement nomenar-lo, on siga

bitcoin : mostra el preu del bitcoin en $, €, $
ethereum : mostra el preu del ethereum en $, #, $
neo : mostra el preu del ethereum en $, #, $

iuu
asco
badum
pistacho
francia, frança, gabachos
españa
valencia
cataluña, catalunya
 
- - - - - - - - - - - - - - - - - 

# Commands

ja no cal la barra al principi

cc CODI_MONEDA : mostra el preu de la moneda en $, €, $
gg help : per a mes info
kale : una imatge random de moltes
`

module.exports = (ctx) => {
  ctx.reply(helpText)
}