const route=require('express').Router()

    let todos=[
        {task:"first"},
        {task:"second"}
    ]
 route.get('/',function(req,res,next){   
res.render('todos',{todos}) //second arg is the todos array sent basically as an object
//first arg in res.render is the name of handlear file without any .hbs extn cuz we've told the server that view engine is hbs 
 })
 route.post('/',function(req,res,next){
     todos.push({task:req.body.newtodo}) //here this newtodo is the same variable as in todos.hbs file
     res.redirect('todos') //when submit is clicked redirected to the same todos page
 })
 module.exports=route