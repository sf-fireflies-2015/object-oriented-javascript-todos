// var newTodoList = function() {
// 	// ???
// };
var counter = 1;

function Task(item) {
    this.id = counter++;
    this.description = item;
    this.completed = false;


    this.complete = function(){
      this.completed = true;
    };
  };



function TodoList() {
  this.tasks = [];

  this.add = function(item){
    grocery = new Task(item);
    this.tasks.push(grocery);
  };

  this.list = function(){
    for (var i=0; i < this.tasks.length; i++){
      console.log(this.tasks[i]);
    }
  };

  this.indexOf = function(item){
    var winner = {};
    for (var i=0; i < this.tasks.length; i++){
      if (this.tasks[i].description == item)
      var winner = this.tasks[i];
    }
    console.log(this.tasks.indexOf(winner));
  };

  this.remove = function(item){
    index = 0;
    for(var i = 0; i < this.tasks.length; i++){
      if (this.tasks[i].description == item.description){
        index = i;
      }
    }
    delete this.tasks[index];
  };

};

// Driver code

// More Driver code
// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
// groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];

console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false


// // This should complete the task
breadTask.complete();

console.log(breadTask.completed) //-> true

groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}
