const express = require("express")
const app = express()

const Jeux = require('./routes/jeuxRoute')
const User = require('./routes/userRoute')
const Historique = require('./routes/userRoute')

app.use(express.json())
app.use("/jeux",Jeux)
app.use("/historique",Historique)

app.use("/user",User)


app.listen(8000)

 
 






