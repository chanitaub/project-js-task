import Task from "./classes/Task.js";
import TaskManager from "./classes/TaskManager.js";

let manager= new TaskManager();


window.click1=function click1(){  
      let adds=document.getElementById("add").value;
      manager.addTask(new Task(adds));
      showTaskesInList();
}

window.clickdell=function clickdell(id){
  manager.deleteTask(id);
  showTaskesInList();
}

window.clickedit = function clickedit(id) {
  let edittask = prompt("Enter new Task:");
  if(edittask!=null && edittask!="")
  manager.updateTaskDescription(id,edittask); 
  showTaskesInList(); 
}

window.clickcheck = function clickcheck(id) {
  manager.completeTask(id);
  showTaskesInList();
}


function showTaskesInList(){
  document.getElementById("myul").innerHTML=""; 
  document.getElementById("mycom").innerHTML="";
    for (let task of manager.taskArr){
      if (task.completed==false){
       document.getElementById("myul").innerHTML+=`
       <div  class="row">       
         <div class="col-6">
         <ul>
         <li class="list-group-item"> <label for=""> ${task.get("description")} </label></li></ul></div>
          <div class="col-6">
        <i onclick="clickcheck(${task.get("id")}) " class="btn text-white bg-success fa-solid fa-check  mt-2 p-2"></i>
        <i onclick="clickedit(${task.get("id")})" class="btn text-white bg-primary fa-solid fa-pen mt-2 p-2"></i>
        <i onclick="clickdell(${task.get("id")})" class="btn text-white bg-danger fa-solid fa-trash mt-2 p-2"></i></li>
        </div>`
        document.getElementById("add").value=""; 
      }  
      else
      { 
       document.getElementById("mycom").innerHTML+=` 
       <div  class="row">       
         <div class="col-6">
         <ul>
         <li class="list-group-item "> <label class="text-decoration-line-through" for=""> ${task.get("description")} </label></li></ul></div>
          <div class="col-6">
        <button disabled onclick="clickcheck()" class="btn text-white bg-success fa-solid fa-check-double mt-2 p-2"></button>
        <button disabled  onclick="clickedit()" class="btn text-white bg-primary fa-solid fa-pen mt-2 p-2"></button>
        <button disabled onclick="clickdell()" class="btn text-white bg-danger fa-solid fa-trash mt-2 p-2 "></button></li>
        </div> `
    }   
  }
    localStorage.setItem("manager.taskArr",JSON.stringify(manager));
}
  
