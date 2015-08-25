
function Task(task){
  this.id = Task.prototype.counter++;
  this.description = task;
  this.completed = false;
  this.complete = function(){
    this.completed = true;
  };
}

Task.prototype.counter = 1;

function TodoList(){
  this.tasks =[];
  this.add = function(task_given) {
     var new_task = new Task(task_given);
     this.tasks.push(new_task);
  };
  // console.log each task
  this.list = function(){
    for (var i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    };
  };
  this.remove = function(item){
    this.tasks.splice(item.indexOf, 1);
  } 
}
  
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
// console.log(groceryList.tasks);//-> [Task, Task, Task]

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id;//-> 1 (some unique numerical ID)
breadTask.description;//-> 'bread'
breadTask.completed;//-> false


// This should complete the task
breadTask.complete();

console.log(breadTask.completed) //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
