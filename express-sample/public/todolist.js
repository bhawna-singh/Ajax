$(function(){
    let newtodoBox= $('#newtodo')
    let addtodoBtn= $('#addtodo')
    let todoList= $('#todolist')
   /* addtodoBtn.click(function(){
        console.log("button was clicked")
    }) */

    // if you want access to the new element being added
   addtodoBtn.click(function(){
       let newtodo=newtodoBox.val()
       
    
   //AJAX

   $.post('/todos/',{task:newtodo},function(data) //data refers to data we want back from server that comes to server thru backend
{
    todoList.empty(); //clears all the data already prsent in the list of todolist.html eg task1
    for(todo of data){
        todoList.append("<li"+todo.task +"</li") // to display in frontend whatever comes in backend
    }
}
   )
})
}) 