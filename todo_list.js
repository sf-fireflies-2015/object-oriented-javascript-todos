var TodoList = function() {
	this.tasks = [];
};

TodoList.prototype.list = function(){
  for (task in this.tasks){
    console.log(this.tasks[task]);
  };
};

TodoList.prototype.add = function(item){
  task = new Task(item);
  this.tasks.push(task);
};

TodoList.prototype.remove = function(item){
  var item_index = this.tasks.indexOf(item);
  delete this.tasks[item_index];
};

var counter = 1;

var Task = function(name){
  this.id = counter++;
  this.description = name;
  this.completed = false;
};

Task.prototype.complete = function(){
  this.completed = true;
};



// DRIVER CODE


// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}