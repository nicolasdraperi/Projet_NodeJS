const express = require("express")
const app = express()

const personne = require('../Exo2/routes/personneRoute')
const animaux = require('../Exo2/routes/animauxRoute')

app.use(express.json())
app.use("/personne",personne)
app.use("/animaux",animaux)

app.listen(8000)
 
 






