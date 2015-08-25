// var counter = 1

// var Task = function(item) {
//   this.id = counter ++;
//   this.description = item;
//   this.completed = false;
//   this.complete = function() {
//     this.completed = true
//   };
// }

// var TodoList = function() {
//   this.tasks = [];
// 	this.add = function(item) {
//     this.tasks.push(new Task(item));
//   };
//   this.list = function() {
//     for (var i = 0; i < this.tasks.length; i++){
//       console.log(this.tasks[i]);
//     };
//   };
//   this.remove = function(taskObject) {
//     this.tasks.splice(taskObject.id - 1, 1)
//     // use id as index
//     };
// };

// REFACTORED

var Task = function(item) {
  this.id = Task.prototype.counter ++;
  // calling the protoype counter because counter isn't the attribute, it's on the other side as a value.
  this.description = item;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true
}


Task.prototype.counter = 1;




var todoList = function() {
  this.tasks = [];
};



todoList.prototype.add = function(item) {
    this.tasks.push(new Task(item));
  };

todoList.prototype.list = function() {
    for (var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i]);
    }
  };

todoList.prototype.remove = function(taskObject) {
    this.tasks.splice(taskObject.id - 1, 1)
    // use id as index
    };



// Driver code


var groceryList = new todoList();

console.log(groceryList.tasks)
console.log(groceryList.add('bread'))
console.log(groceryList.add('cheese'));
console.log(groceryList.add('milk'));
console.log(groceryList.tasks)
console.log(groceryList.list())

var breadTask = groceryList.tasks[0]

console.log(breadTask.id)
console.log(breadTask.description)
console.log(breadTask.completed)
console.log(breadTask.complete());
console.log(breadTask.completed)
console.log(groceryList.list())

console.log(groceryList.remove(breadTask));

console.log(groceryList.list())

