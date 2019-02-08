const express=require('express')
const todoRoute=require('./routes/todos')
const server=express()
server.set('view engine','hbs') //tells the server uses hbs as view engine
server.set('views',__dirname+'/views') /*it tells the server inside which folder will it
 look for views second arg would be xyz if name of our views folder would have been xyz */
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/todos',todoRoute)
server.listen(1234)