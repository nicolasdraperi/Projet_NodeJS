const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')


Route.get('/createAllTable', Jeux.creatTables)




module.exports=Route