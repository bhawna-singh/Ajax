const express=require('express')
const server=express();
const todoRoute=require('./routes/todos')

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.get('/hello',function(req,res,next)
{
    res.send("hello")
})

server.use('/public',express.static(__dirname +"/public"))
server.use('/todos',todoRoute)
server.listen(9898); 
