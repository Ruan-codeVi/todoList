// Seletores
const todoInpunt = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filtroOpt = document.querySelector('.filtro-todo');
// Event listeners
todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deleteCheck);
filtroOpt.addEventListener('click', filtroTodos);
// functions
function addtodo(event){
//   
    event.preventDefault();
    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Criar Li
    const newtodo = document.createElement('li');
    newtodo.innerHTML = todoInpunt.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);
    // ADD TODO para LocalStorage
    salvarLocalTodos(todoInpunt.value);
    // CHECK botao finalizado
    const butaoCompleto = document.createElement('button');
    butaoCompleto.innerHTML = '<i class="fas fa-check-square"></i>';
    butaoCompleto.classList.add('complete-btn');
    todoDiv.appendChild(butaoCompleto);
    // CHECK botao deletar
    const butaoDeletar = document.createElement('button');
    butaoDeletar.innerHTML = '<i class="fas fa-trash"></i>';
    butaoDeletar.classList.add('delete-btn');
    todoDiv.appendChild(butaoDeletar);
    // Append para lista
    todoList.appendChild(todoDiv);
    //limpar valor todo-input
    todoInpunt.value = '';
};
function deleteCheck(e){
const item = e.target;
//deletar TODO
if(item.classList[0]=== 'delete-btn'){
const todo = item.parentElement;
// Animação
todo.classList.add('fall')
//função para deletar depois da animação
todo.addEventListener("transitionend",function(){
    todo.remove()
 });

};
// Check TODO
if (item.classList[0] === 'complete-btn') {
   const todo = item.parentElement;
   todo.classList.toggle('completed'); 
  }
};
// função filtrar todos
function filtroTodos(e){
 const todos = todoList.childNodes
 todos.forEach(function(todo){
     switch(e.target.value){
         case "all":
         todo.style.display = 'flex';
         break;
         case "completed":
         if (todo.classList.contains('completed')) {
            todo.style.display = 'flex'; 
         }else{
             todo.style.display = 'none';
         }
         break;
         case "uncompleted":
             if (!todo.classList.contains('completed')) {
                todo.style.display = 'flex'; 
             }else{
                todo.style.display = 'none';
            }
            break;
     };
 });
};

function salvarLocalTodos(todo){
    // salvar todos em localStorage
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
};
