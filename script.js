const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask(taskText, save = true) {
  taskText = taskInput.value.trim();
  if (taskText == "") {
    alert("Please enter a task.");
  }
  if (taskText !== "") {
    const li = document.createElement("li");
    const node = document.createTextNode(taskText);
    li.appendChild(node);
    taskList.appendChild(li);
    let tasks = taskText;
    localStorage.setItem("tasks", taskText);
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.innerHTML = "Remove";
    function removeLi() {
      li.remove();
    }
    removeButton.addEventListener("click", removeLi);
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskList.value = "";
  }
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

document.addEventListener("DOMContentLoaded", loadTasks, addTask);
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (validate) => {
  if (event.key === "Enter") {
    addTask();
  }
});
