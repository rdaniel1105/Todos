import './styles.css';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import { CrearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//const tarea = new Todo( 'Aprender JavaScript!');
//const tarea2 = new Todo( 'Comprar un unicornio');
//todoList.nuevoTodo( tarea );
//todoList.nuevoTodo( tarea2 );


//console.log(todoList);

//CrearTodoHtml(tarea);

//localStorage.setItem('my-key','ABC123');

// setTimeout(() => {
//     localStorage.removeItem('my-key');
// }, 1500);

// todoList.todos.forEach( todo => {
//     CrearTodoHtml(todo)
// });

todoList.todos.forEach( CrearTodoHtml );

//todoList.todos[0].imprimirClase();