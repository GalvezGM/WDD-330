//Declared Constants
const list = document.getElementById("taskList");
const form = document.getElementById("form");
const text = document.getElementById("text");

const activeButton = document.getElementById("active");
const allButton = document.getElementById("all");
const completedButton = document.getElementById("completed");

const newTask = document.getElementById("newTask");
const addButton = document.getElementById("submit");

const checked = document.getElementById("checked");
const localStorageTransactions = JSON.parse(localStorage.getItem("tasks"));

//Event Listeners
let tasks = localStorage.getItem("tasks") !== null ? localStorageTransactions : [];
addButton.addEventListener("click", addTask);
activeButton.addEventListener("click", viewActive);
allButton.addEventListener("click", viewAll);
completedButton.addEventListener("click", viewCompleted);


//Functions
function addProcedure(task) {
    const item = document.createElement("li");
    item.innerHTML = `
    <input type="checkbox" id="checked" ${
      task.completed === true ? "checked" : ""
    } onclick="updateTask(${task.id})"/>
    <label class="markedCheck" for="idInput">${
      task.text
    }</label> <button class="deleteButton" onclick="removeTask(${
    task.id
  })">X</button>
    `;
    list.appendChild(item);
}

function init() {
    list.innerHTML = "";
    tasks.forEach(addProcedure);
    countRemainTasks(tasks);
}

//Task Add
function addTask(event) {
    event.preventDefault();
    if (newTask.value === "") {
        alert("Submission Empty. Please Try Again.");
    } else {
        const task = {
            id: Date.now(),
            text: newTask.value,
            completed: false,
        };
        tasks.push(task);
        console.log(tasks);
        newTask.value = "";
        console.log(task);
        addProcedure(task);
        updateLocalStorage();
    }
    countRemainTasks(tasks);
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    countRemainTasks();
}

function updateTask(id) {
    const tasksIndex = tasks.map((transaction) => transaction.id);
    const index = tasksIndex.indexOf(id);
    tasks[index].completed = !tasks[index].completed;
    updateLocalStorage();
    init();
}

//Task Removal
function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    updateLocalStorage();
    init();
}

//Task Count
function countRemainTasks() {
  document.getElementById("tasksLeft").innerText = tasks.filter(
      (task) => task.completed === false
  ).length;
}

//Viewing Options
function viewAll() {
    init();
}

function viewActive() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === false);
    filteredTasks.forEach(addProcedure);
}

function viewCompleted() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === true);
    filteredTasks.forEach(addProcedure);
}

init();