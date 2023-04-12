const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", toggleTask);

// Add a new task
function addTask() {
  const newTask = document.createElement("li");

  newTask.innerText = newTaskInput.value;

 
  // Delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.innerText = "x";
  deleteBtn.classList.add("delete-btn");

  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);
  newTaskInput.value = "";
}

// Toggle a task as completed or not
// Help from YouTube
function toggleTask(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
  }
}