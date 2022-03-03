const toDoForm = document.querySelector("#to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#to-do-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const xbtn = document.createElement("button");
    xbtn.innerText = "❌"
    xbtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(xbtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);