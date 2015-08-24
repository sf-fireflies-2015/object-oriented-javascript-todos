
var TodoList = function() {
  this.tasks = []
    this.add = function(item){
      var task = {}
        task.description = item;
        task.completed = false;
      this.tasks.push(task)
    };
    this.list = function(){
      for (i = 0; i < this.tasks.length; i++) {
       console.log(this.tasks[i]);
      }
    }

};


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks[0]
