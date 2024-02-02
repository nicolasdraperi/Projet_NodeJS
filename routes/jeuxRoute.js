const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')
const User=require('../controller/userController.')


Route.get('/createAllTable', Jeux.creatTables)
Route.post('/ajouterJeux', Jeux.addJeux)
Route.put('/modifJeux/:id', Jeux.updateJeux);
Route.delete('/supprJeux/:id', Jeux.deleteJeux);
Route.post('/jeux', Jeux.listeJeux);
Route.post('/acheterJeux', User.authenticator,Jeux.acheterJeux);




module.exports=Route