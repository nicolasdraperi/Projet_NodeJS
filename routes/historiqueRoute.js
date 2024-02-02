const express=require('express')


const Route=express.Router()
const Historique=require('../controller/historiqueController')

const User=require('../controller/userController.')

Route.post('/show',User.Admin_OR_NOT, Historique.show)
Route.post('/showUser',User.authenticator, Historique.getHistoriqueUtilisateur)


 

module.exports=Route