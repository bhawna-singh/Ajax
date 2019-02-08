const route=require('express').Router()
let todos=[];
route.get('/',function(req,res,next){
    res.send(todos)
})
route.post('/',function(req,res,next){
   todos.push({task:req.body.task})
    res.send(todos)
})
module.exports=route;