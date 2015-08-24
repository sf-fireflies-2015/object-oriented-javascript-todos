
var TodoList = function(){

  this.id = 0;
  this.tasks = [];
};

function Task(id, desc){
  this.id = id;
  this.description = desc;
  this.completed = false;

}
Task.prototype.complete = function(){
    this.completed = true;
  };

TodoList.prototype.add = function(item){
  // this.tasks.push({id: this.id++, description: item, completed: false});
  this.tasks.push(new Task(++this.id, item));
};

TodoList.prototype.listTasks = function(item){
  console.log(this.tasks);
};

TodoList.prototype.list = function(item){
this.tasks.forEach(function(entry) {
    console.log(entry);
  });
};

TodoList.prototype.remove = function(item){
  index = this.tasks.indexOf(item)
  console.log(index)
  console.log(this.tasks[0])
  delete this.tasks[index]
};



// Driver code


// var todoList = newTodoList();
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.listTasks(); //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id; //-> 1 (some unique numerical ID)
breadTask.description; //-> 'bread'
breadTask.completed; //-> false


// This should complete the task
breadTask.complete();

// breadTask.completed; //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);
console.log("*********************************************")
groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


