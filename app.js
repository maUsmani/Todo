//selectors
const todoInput = document.querySelector('.todo-input');
const todoButtom = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event Listeners
todoButtom.addEventListener('click', addTodo);

//functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //TodoDIV
    const todoDiv = document.createElement("div");
    //Create LI
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //CHECK DELETE BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv)



}