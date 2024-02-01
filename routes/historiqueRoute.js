const express=require('express')


const Route=express.Router()
const Historique=require('../controller/historiqueController')


Route.get('/Show', Historique.show)




module.exports=Route