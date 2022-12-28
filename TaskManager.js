import Task from "../classes/Task.js";

export default class TaskManager{
    constructor(){
    this.taskArr=[];
}

addTask(newTask){  
    this.taskArr.push(newTask); 
}

deleteTask(id){
    this.taskArr=this.taskArr.filter((task)=>task.id!=id);
}

updateTaskDescription(id,newdescription){
    let taskToUpdate = this.taskArr.find((task) => task.id == id);   
    let indexToUpdate = this.taskArr.indexOf(taskToUpdate);
    this.taskArr[indexToUpdate].description=newdescription;
}

completeTask(id){
    let taskToUpdate = this.taskArr.find((task) => task.id == id);   
    let indexToUpdate = this.taskArr.indexOf(taskToUpdate);
    this.taskArr[indexToUpdate].completed=true;
}

set (propName,value){
    this[propName]=value;
}

get (propName){
    return this[propName];
}
}