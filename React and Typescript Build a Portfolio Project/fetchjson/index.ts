import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const m = new Date();

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  /**
   * Two options for using our Todo interface
  1. const todo:Todo = response.data;
  2. const todo:Todo = response.data as Todo;
   */
  const todo: Todo = response.data as Todo;
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
  The todo with id: ${id};
  Has a title of: ${title}
  is it finished? ${completed}
`);
};

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (x: number) => void = (i: number) => {
  console.log(i);
};
