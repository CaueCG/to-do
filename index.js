const formTodo = document.getElementById("addTodo");
const listTodo = document.getElementById("listTodo");
const btnDelete = document.getElementsByClassName("btnDelete");

let todo = [];

formTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTodo = document.getElementById("inputAdd");
  let value = inputTodo.value.trim();

  if (value) {
    reloadNewTask(inputTodo.value);

    todo.push({
      name: inputTodo.value,
      isDone: false,
    });

    inputTodo.value = "";
  } else {
    alert("Empty field, type something!");
  }
});

function reloadNewTask(newTodo) {
  listTodo.innerHTML += `   <div id="itemTodo${todo.length}" class="itemTodo">
      <input type="text" value=${newTodo} readonly />
      <div class="buttonsTodo">
        <button class="btnEdit" id="btnEdit${todo.length}"><i class="fas fa-edit fa-lg"></i></button>
        <button class="btnDelete" id="btnDelete${todo.length}"><i class="fas fa-trash-alt fa-lg"></i></button>
      </div>
    </div>`;
}

todo.forEach((element, index) => {
  let bDelete = document.getElementById(`btnDelete${index}`);
  bDelete.addEventListener("click", () => {
    listTodo.removeChild(`itemTodo${index}`);
    todo.splice(index);
    console.log(todo);
  });
});
