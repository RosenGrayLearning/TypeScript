"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    /**
     * Two options for using our Todo interface
    1. const todo:Todo = response.data;
    2. const todo:Todo = response.data as Todo;
     */
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log(response);
    console.log("\n     The todo with id: " + id + ";\n     Has a title of: " + title + "\n     is it finished? " + completed + "\n  ");
});
