document.addEventListener("DOMContentLoaded", (event) => {});
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  let taskText = taskInput.value;
  if (taskText == "") {
    alert("Please enter a task.");
  }
  if (taskText != "") {
    const li = document.createElement("li");
    const node = document.createTextNode(taskText);
    li.appendChild(node);
    taskList.appendChild(li);
    const removeButton = document
      .createElement("button")
      .classList.add("remove-btn");
    removeButton.onclick(taskList.remove(li));
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskList.value = "";
    addButton.addEventListener("click", addTask());
    taskInput.addEventListener("keypress", (validate) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", addTask);
