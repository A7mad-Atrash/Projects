class Task{
    id;
    title;
    description;
    completed = false;
    dueDate;

    constructor (id, title = "", description = "", completed = "", dueDate = ""){
        this.id = id;
        this.title = title; 
        this.description = description;
        this.completed = completed;
        this.dueDate = dueDate;
    }

    setCompleted(){
        this.completed = true;
    }
}

Task.prototype.description = "";
Task.prototype.title = "";
Task.prototype.getTaskInfo = function () {
  return `Description: ${this.description}, Due Date: ${this.dueDate}, Priority: ${this.priority}`;
 };

export default Task;