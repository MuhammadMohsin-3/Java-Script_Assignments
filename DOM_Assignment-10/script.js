let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display tasks
function renderTasks(){
  taskList.innerHTML = "";
  tasks.forEach((task,index)=>{
    let li = document.createElement("li");
    li.textContent = task.text;
    if(task.completed) li.classList.add("completed");

    // Toggle completed
    li.addEventListener("click", ()=>{
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click",(e)=>{
      e.stopPropagation();
      let newTask = prompt("Update task", task.text);
      if(newTask && newTask.trim()!==""){
        tasks[index].text = newTask.trim();
        saveTasks();
        renderTasks();
      }
    });
    li.appendChild(editBtn);

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft="5px";
    delBtn.addEventListener("click",(e)=>{
      e.stopPropagation();
      tasks.splice(index,1);
      saveTasks();
      renderTasks();
    });
    li.appendChild(delBtn);

    taskList.appendChild(li);
  });
}

// Add new task
addBtn.addEventListener("click", ()=>{
  let text = taskInput.value.trim();
  if(text==="") return alert("Task cannot be empty");
  tasks.push({text:text, completed:false});
  taskInput.value="";
  saveTasks();
  renderTasks();
});

// Clear all tasks
clearBtn.addEventListener("click", ()=>{
  if(confirm("Are you sure you want to clear all tasks?")){
    tasks=[];
    saveTasks();
    renderTasks();
  }
});

// Initial render
renderTasks();