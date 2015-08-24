var newTodoList = function() {
	return new TodoList;
};

function TodoList() {
  lengthCounter = 0;
  this.tasks = [];
}
TodoList.prototype.add = function(item) {
  lengthCounter++;
  var taskID = lengthCounter;
  this.tasks.push(new Task(taskID, item));
}
// TodoList.prototype.tasks = function() {
//   return this.tasks.map(function(obj) {
//     return obj.description;
//   });
// }

TodoList.prototype.list = function() {
  for (var i = 0; i < this.tasks.length; i++) {
    console.log("Task: " + JSON.stringify(this.tasks[i]));
  }
}

function Task(taskID, item) {
  this.id = taskID;
  this.description = item;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
}

TodoList.prototype.remove = function(taskToRemove) {
  var taskIndex = this.tasks.indexOf(taskToRemove);
  console.log(this.tasks);
  this.tasks.splice(taskIndex, 1);
}

// Driver code


var todoList = newTodoList();
todoList.add("bread");
todoList.add("cheese");
todoList.add("milk");

// console.log(todoList.tasks)

var aTask = todoList.tasks[0];
// console.log(aTask.id)
// console.log(aTask.description)
// console.log(aTask.completed)

aTask.complete();

aTask.completed; //-> true
console.log(todoList.tasks);

todoList.remove(aTask);

console.log(todoList.list());
