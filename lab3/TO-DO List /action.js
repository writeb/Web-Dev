const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = input.value.trim();
  if (todo.length > 0) {
    todos.push(todo);
    renderTodos();
    input.value = "";
  }
});

function renderTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    const todo = document.createTextNode(todos[i]);
    li.appendChild(todo);

    const deleteBtn = document.createElement("button");
    const deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    deleteBtn.addEventListener("click", () => {
      todos.splice(i, 1);
      renderTodos();
    });
    li.appendChild(deleteBtn);

    const completeBtn = document.createElement("button");
    const completeText = document.createTextNode("Complete");
    completeBtn.appendChild(completeText);
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("complete");
    });
    li.appendChild(completeBtn);

    todoList.appendChild(li);
  }
}