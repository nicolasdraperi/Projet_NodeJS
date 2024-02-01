const express=require('express')


const Route=express.Router()
const Jeux=require('../controller/jeuxController')


Route.get('/createAllTable', Jeux.creatTables)
Route.post('/ajouterJeux', Jeux.addJeux)
Route.put('/modifJeux/:id', Jeux.updateJeux);
Route.delete('/supprJeux/:id', Jeux.deleteJeux);
Route.get('/jeux', Jeux.listeJeux);
Route.post('/acheterJeux', Jeux.acheterJeux);




module.exports=Route