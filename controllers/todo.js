var Todo = require('../models/Todo');

exports.getAllTodos = function(req, res, next) {
  Todo.find().exec(function(err, todos){
    if(err) next(err);
    res.json(todos);
  });
}

exports.postCreateTodo = function(req, res, next) {
  var name = req.body.name;
  var todo = new Todo({
    name: name
  });
  todo.save(function(err, todo){
    res.send(200);
  });
}
