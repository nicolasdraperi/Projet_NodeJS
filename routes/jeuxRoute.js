const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')


Route.get('/createTable', Jeux.creatTab)




module.exports=Route