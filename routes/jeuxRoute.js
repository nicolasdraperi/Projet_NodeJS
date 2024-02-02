const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')
const User=require('../controller/userController.')


Route.get('/createAllTable', Jeux.creatTables)
Route.put('/modifJeux/:id', Jeux.updateJeux);
Route.delete('/supprJeux/:id', Jeux.deleteJeux);
Route.post('/jeux', Jeux.listeJeux);
Route.post('/adminJeux',User.Admin_OR_NOT, Jeux.listeJeux);
Route.post('/acheterJeux', User.authenticator,Jeux.acheterJeux);
Route.delete('/deleteJeux', User.Admin_OR_NOT,Jeux.deleteJeux);

Route.post('/ajouterJeux', User.Admin_OR_NOT,Jeux.addJeux)
Route.post('/ajouterStock', User.Admin_OR_NOT,Jeux.ajouterStock)




module.exports=Route