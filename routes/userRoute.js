const express=require('express')


const Route=express.Router()
const User=require('../controller/userController.')


Route.post('/createUser',User.createUser)

Route.post('/login', User.login)

Route.post('/admin', User.Admin_OR_NOT)

Route.post('/token', User.authenticator)

module.exports=Route