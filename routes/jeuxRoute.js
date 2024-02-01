const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')

const User=require('../controller/userController.')

Route.get('/createAllTable', Jeux.creatTables)




module.exports=Route