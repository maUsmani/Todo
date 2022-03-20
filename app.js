//selectors
const todoInput = document.querySelector('.todo-input');
const todoButtom = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButtom.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
//functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    if (!todoInput.value == ""){
        //TodoDIV
        const todoDiv = document.createElement("div");
        //Create LI
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //ADD TO LOCAL
        saveLocalTodos(todoInput.value);
        //CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //CHECK DELETE BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoList.appendChild(todoDiv)

        todoInput.value = "";
    }
}

function deleteCheck(e){
    const item = e.target;

    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
        });
        removeLocalTodo(item)
    }
    //checkedMark
    if(item.classList[0] === 'complete-btn'){
        item.parentElement.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = "none";
                }
                break;
            default:
                todo.style.display = 'flex';
                break;
        }
    });
}

function saveLocalTodos(todo){
    //CHECK --- HEY Do I already Have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem ('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    //CHECK --- HEY Do I already Have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem ('todos'))
    }
    todos.forEach(function(todo){
        //TodoDIV
        const todoDiv = document.createElement("div");
        //Create LI
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
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
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoList.appendChild(todoDiv)
    });
}

function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem ('todos'))
    }
    
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}