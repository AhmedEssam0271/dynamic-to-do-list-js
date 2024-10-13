const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

function addTask(taskText, save = true) {
  let taskText = taskInput.value.trim();
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
    const removeButton = document
      .createElement("button")
      .classList.add("remove-btn");
    removeButton.onclick(taskList.Remove(li));
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
document.addEventListener("DOMContentLoaded", loadTasks, addTask);
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (validate) => {
  if (event.key === "Enter") {
    addTask();
  }
});
