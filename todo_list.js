var counter = 1;

function Task(arg){
  this.id = counter++,
  this.description = arg,
  this.completed = false
};

function TodoList(){
  this.tasks = [];
  };

TodoList.prototype.add = function(arg){
  // var one_task = new Task(arg);
  this.tasks.push(new Task(arg));
  return this.tasks;
};

TodoList.prototype.list = function(){
  // console.log(this.tasks);
  return this.tasks;
};

TodoList.prototype.indexOf = function(arg, array){
  var array = this.tasks;
  for (var i=0; i < array.length; i++) {
    if (array[i].description[arg] === arg) {
      return array[i];
      };
    };
  };

//   todoList.get = function(index){
//     var array = this.tasks;
//     for (var i=0; i < array.length; i++) {
//       // console.log(array[index]);
//       return array[index];
//     };
//   };

Task.prototype.complete = function(index){
  var array = function(){
    TodoList.prototype.tasks[index].completed = true
  };
};



TodoList.prototype.remove = function(index){
  this.tasks.splice(index, 1);
  return TodoList;
};


// Driver code
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

// var todoList = newTodoList();
