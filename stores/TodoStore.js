var extendObservable = require('../static/libs/mobx').extendObservable
var TodoStore = function() {
  extendObservable(this, {
    // observable data
    todos: [{
      title: 'hahah'
    }],
    todoText: 'aaa',
    get count() {
      return this.todos.length
    }
  })
  // actions
  this.addTodo = function(title) {
    this.todos.push({ title: 'aa'})
  }

  this.removeTodo = function() {
    this.todos.pop()
  }
}

module.exports = {
  TodoStore: new TodoStore,
}
