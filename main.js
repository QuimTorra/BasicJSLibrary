import { $, useState } from "./jsLib.js"
import { ToDo } from "./todo.js";

const [count, setCount] = $('#display').bind(0);

$('#countup').on('click', () => {
  setCount(count() + 1);
});

$('#countdown').on('click', () => {
  setCount(count() - 1);
});

$('#resetcount').on('click', () => {
  setCount(0);
});

/*
  TODOs
*/

const [todolist, setTodolist] = useState([])
const reactingTodolist = (val) => {

  const ref = $('#todoDisplay')

  const todo = val[val.length-1];
  ref.addChild( ToDo( todo.id, todo.value, todo.complete ) );
  console.log(todo.id);
  document.querySelector(`#check${todo.id}`).addEventListener('click', () => completeTask(todo.id));
  
  setTodolist(val);
}

function completeTask (id) {
  let t = todolist();

  const todo = $(`#todo${id}`);
  
  if ( todo.element.classList.contains("complete") ) todo.removeClass("complete");
  else todo.addClass("complete");
  t[id].complete = !t[id].complete;
  // console.log(t);
  // reactingTodolist(t);
}

$('#addtodo').on('click', () => {
  let tl = todolist();
  const id = tl.length;

  tl.push({id: id, value: $('#todoinput').value, complete: false});
  localStorage.setItem("todolist", tl);

  reactingTodolist(tl);

  $('#todoinput').element.value = '';
})
$('#clearlist').on('click', () => {
  // reactingTodolist([]);
})