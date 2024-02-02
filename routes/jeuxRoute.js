const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')
const User=require('../controller/userController.')


Route.get('/createAllTable', Jeux.creatTables)
Route.put('/modifJeux/:id', Jeux.updateJeux);
Route.delete('/supprJeux/:id', Jeux.deleteJeux);
Route.post('/jeux', Jeux.listeJeux);
Route.get('/adminJeux',User.Admin_OR_NOT, Jeux.listeJeux);
Route.post('/acheterJeux', User.authenticator,Jeux.acheterJeux);

Route.post('/ajouterJeux', User.Admin_OR_NOT,Jeux.addJeux)
Route.post('/ajouterStock', Jeux.ajouterStock)




module.exports=Route