const formTodo = document.getElementById("addTodo");
const listTodo = document.getElementById("listTodo");
const btnDelete = document.getElementsByClassName("btnDelete");

let todo = [];

const localStorageTodos = JSON.parse(localStorage.getItem("todo"));
let todos = localStorage.getItem("todo") !== null ? localStorageTodos : [];

const updateLocalStorage = () => {
  localStorage.setItem("todo", JSON.stringify(todo));
};

/*try {
  todo = JSON.parse(localStorage.getItem("todos")) || [];
} catch {}*/

formTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTodo = document.getElementById("inputAdd");
  let value = inputTodo.value.trim();

  if (value) {
    todo.push({
      name: inputTodo.value,
      isDone: false,
    });
    // localStorage.setItem("todos", JSON.stringify(todo));
    inputTodo.value = "";
    console.log(todo);
    updateLocalStorage();
  } else {
    alert("Empty field, type something!");
  }

  rechargeTodo();
});

function rechargeTodo() {
  listTodo.innerHTML = "";
  let currentTodo = "";

  todo.forEach((element, index) => {
    currentTodo += `   <div id="itemTodo${index}" class="itemTodo">
      <input type="text" value="${element.name}" readonly />
      <div class="buttonsTodo">
        <button class="btnEdit" id="btnEdit${index}"><i class="fas fa-edit fa-lg"></i></button>
        <button class="btnDelete" id="btnDelete${index}"><i class="fas fa-trash-alt fa-lg"></i></button>
      </div>
    </div>`;
  });
  listTodo.innerHTML += currentTodo;
  currentTodo = "";
}

/*todo.forEach((element, index) => {
  let bDelete = document.getElementById(`btnDelete${index}`);
  bDelete.addEventListener("click", () => {
    listTodo.removeChild(`itemTodo${index}`);
    todo.splice(index);
    console.log(todo);
  });
});*/
