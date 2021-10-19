const formTodo = document.getElementById("addTodo");
const listTodo = document.getElementById("listTodo");

let todo = [];

try {
  const todoLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
  rechargeTodo(todoLocalStorage);
} catch {}

formTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTodo = document.getElementById("inputAdd");
  let value = inputTodo.value.trim();

  if (value) {
    todo.push({
      name: inputTodo.value,
      isDone: false,
    });
    rechargeTodo(todo);
    localStorage.setItem("todos", JSON.stringify(todo));
    inputTodo.value = "";
  } else {
    alert("Empty field, type something!");
  }
});

function rechargeTodo(todos) {
  let currentTodo = "";

  todos.forEach((element, index) => {
    currentTodo += `   <div id="itemTodo${index}" class="itemTodo">
      <input type="text" value="${element.name}" readonly />
      <div class="buttonsTodo">
        <button class="btnEdit" id="btnEdit${index}"><i class="fas fa-edit fa-lg"></i></button>
        <button class="btnDelete" id="btnDelete${index}"><i class="fas fa-trash-alt fa-lg"></i></button>
      </div>
    </div>`;
  });
  listTodo.innerHTML = currentTodo;
  deleteTodo(todos);
  EditTodo(todos);
}

function deleteTodo(todos) {
  todos.forEach((element, index) => {
    const bDelete = document.getElementById(`btnDelete${index}`);
    bDelete.addEventListener("click", () => {
      let answer = confirm("Do you really want to delete the task?");

      if (answer == true) {
        todo.splice(index, 1);
        rechargeTodo(todo);
        localStorage.setItem("todos", JSON.stringify(todo));
      } else {
        return;
      }
    });
  });
}

function EditTodo(todos) {
  todos.forEach((element, index) => {
    const bEdit = document.getElementById(`btnEdit${index}`);
    bEdit.addEventListener("click", () => {
      let newName = prompt("Enter a new task, please.");
      todo[index].name = newName;
      rechargeTodo(todo);
      localStorage.setItem("todos", JSON.stringify(todo));
    });
  });
}

/*todo.forEach((element, index) => {
  let bDelete = document.getElementById(`btnDelete${index}`);
  bDelete.addEventListener("click", () => {
    listTodo.removeChild(`itemTodo${index}`);
    todo.splice(index);
    console.log(todo);
  });
});*/
