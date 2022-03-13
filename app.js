//selectors
const todoInput = document.querySelector('.todo-input');
const todoButtom = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event Listeners
todoButtom.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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
    }
    //checkedMark
    if(item.classList[0] === 'complete-btn'){
        item.parentElement.classList.toggle("completed");
    }
}