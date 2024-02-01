const express=require('express')


const Route=express.Router()
const User=require('../controller/userController.')


Route.post('/createUser', User.authenticator,User.createUser)

Route.post('/login', User.login)



module.exports=Route