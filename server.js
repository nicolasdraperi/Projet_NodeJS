const express = require("express")
const app = express()
var cors = require('cors')

const Jeux = require('./routes/jeuxRoute')
const User = require('./routes/userRoute')
const Historique = require('./routes/historiqueRoute')

app.use(express.json())

app.use(cors())
app.use("/jeux",Jeux)
app.use("/historique",Historique)

app.use("/user",User)



app.listen(8000)

 
 






