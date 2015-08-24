var TodoList = function(){
  this.maxId = 0;
  this.tasks = [];
  this.add = function(description){

    var new_task = new Task(this.maxId += 1, description);
    // inside the new Task - 'this' is an empty object {}
    // JS has implicit return with the 'new' keyword
    this.tasks.push(new_task);
  };
  this.list = function(){
    for (var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i]);
    }
  };

  this.remove = function(task){
    for (var i = 0; i < this.tasks.length; i++){
        if (this.tasks[i] === task){
          this.tasks.splice(i,1);
          break;
        }
    }
  };
};

// different way to define a function

var Task = function(id, description) {
  this.id = id;
  this.description = description;
  this.completed = false;
  this.complete = function(){this.completed = true;}
}

// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

console.log(groceryList.tasks[0].description === 'bread');
console.log(groceryList.tasks[1].description === 'cheese');
console.log(groceryList.tasks[2].description === 'milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]


groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask.id === 1) //-> 1 (some unique numerical ID)
console.log(breadTask.description === 'bread') //-> 'bread'
console.log(breadTask.completed === false) //-> false


// This should complete the task
breadTask.complete();

console.log(breadTask.completed === true)//-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
console.log(groceryList.tasks.length === 2);
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


