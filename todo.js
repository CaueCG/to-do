let todo = [];

async function fetchTodos(idToken) {
  const url = `https://caue-todo.herokuapp.com/todos?idToken=${idToken}`;
  const response = await fetch(url);
  const todos = (await response.json()) || [];

  return todos;
}

export async function renderTodos(idToken) {
  const todos = (await fetchTodos(idToken)) || [];

  document.body.innerHTML = `
  <header>
      <div class="containerHeader">
        <i class="fas fa-tasks fa-5x"></i>
        <p>TODO</p>
      </div>
    </header>
    <main>
      <div class="containerMain">
        <form id="addTodo">
          <input id="inputAdd" type="text" placeholder="Add a new task" />
          <button><i class="fas fa-check fa-lg"></i></button>
        </form>
        <div id="listTodo">

          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="containerFooter">
        <div class="projectStudy">
          <p>Project developed<br />by Caue CG</p>
        </div>
        <div class="palleteColors">
          <i class="fas fa-palette fa-lg"></i>
          <p>Light Theme</p>
        </div>

        <div class="iconSocialNetworks">
          <a href="https://github.com/CaueCG" target="_blank"
            ><i class="fab fa-github fa-lg"></i>
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </footer>`;

  setupListener();
  rechargeTodo(todos);
}

function getListElement() {
  return document.getElementById("listTodo");
}

function setupListener() {
  const formTodo = document.getElementById("addTodo");
  const listTodo = getListElement();

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
      // TODO: call API deleting it
      inputTodo.value = "";
    } else {
      alert("Empty field, type something!");
    }
  });
}

function rechargeTodo(todos) {
  const listTodo = getListElement();
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

        // TODO: call API editting todo
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
      // TODO: call API editting todo
    });
  });
}
