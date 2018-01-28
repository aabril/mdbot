const helpText = `
Hola madafackers, aci la llista de commands:

# Patrons

\`\`\`
simplement nomenar-lo, on siga
\`\`\`

### Cryptos

 * "bitcoin" : mostra el preu del bitcoin en $, €, $
 * "ethereum" : mostra el preu del ethereum en $, #, $
 * "neo" : mostra el preu del ethereum en $, #, $

### Audios

 * iuu
 * asco
 * badum
 * pistacho
 * francia, frança, gabachos
 * españa
 * valencia
 * cataluña, catalunya
 
- - - - - - - - - - - - - - - - - 

# Commands

\`\`\`
al principi del text
ja no cal la barra al principi
de vegades necessita arguments, altres no
\`\`\`

### Cryptos 

* "cc CODI_MONEDA" : mostra el preu del bitcoin en $, €, $
* "gg CODI_MONEDA_ANALITZADA (CODI_MONEDA_BASE=USD) PERIODE(opcions: 1y|6m|(3m)|1m|2w|1w|1d|12h|1h)" : vos enviarà una gràfica del progrés de la moneda

### KaleBarraka

* kale : una imatge random de moltes
`

module.exports = (ctx) => {
  ctx.reply(helpText)
}