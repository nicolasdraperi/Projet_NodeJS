const express=require('express')


const Route=express.Router()
const Historique=require('../controller/historiqueController')

const User=require('../controller/userController.')

Route.post('/show',User.authenticator, Historique.show)




module.exports=Route