function NewToDoList() {

  
  // This is now just a property instead of a nested hash because the 'new' keyword implicitly returns an object when called on a constructor function
  this.tasks = [];

};


// We use prototype in order to allow us to only have one instance of each function that can then be used by all instances of NewToDoList
NewToDoList.prototype.add = function(task) {
  	this.tasks.push(new Task(task));
  };


NewToDoList.prototype.list = function() {
  	console.log(JSON.stringify(this.tasks));
  };

NewToDoList.prototype.get = function(index) {
  	return this.tasks[index];
  }; 

NewToDoList.prototype.indexOf = function(item) {
  	for (var i = 0; i < this.tasks.length; i++){
  		if (this.tasks[i].description === item){
  			return i;
  		}
  	}
  };

NewToDoList.prototype.remove = function(task){

	this.tasks.splice(task.id, 1);
};


function Task(description) {
	this.description = description; 
	this.completed = false;
  this.id = Task.prototype.counter++;
}

Task.prototype.complete = function() {
	this.completed = true;
};

Task.prototype.counter = 0;


// Driver code


// var todoList = NewToDoList();


  // Note we are using a JavaScript constructor now.
var groceryList = new NewToDoList();

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