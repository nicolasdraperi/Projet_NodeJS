const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')


Route.get('/create', Jeux.creatTab)




module.exports=Route