const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  const taskInput = document.getElementById("taskName");
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      newTodo();
    }
  });
  function newTodo() {
    const taskInput = document.getElementById("taskName");
    let taskName = taskInput.value.trim(); 
  
    if (!taskName) {
      taskName = "New Task";
    }
    taskInput.value = "";
    const newTask = document.createElement("li");
    newTask.classList.add(classNames.TODO_ITEM);
    newTask.textContent = taskName;
    list.appendChild(newTask);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add(classNames.TODO_CHECKBOX);
    newTask.appendChild(checkbox);
    itemCountSpan.textContent++;
    uncheckedCountSpan.textContent++;
    checkbox.addEventListener("change",function(){
        if (checkbox.checked){
            uncheckedCountSpan.textContent--;
        }
        else{
            uncheckedCountSpan.textContent++;
        }
    })

    
    const del= document.createElement("button");
    del.textContent="X";
    del.classList.add(classNames.TODO_DELETE);
    newTask.appendChild(del);
    del.addEventListener("click",function(){
        if(!checkbox.checked){
            uncheckedCountSpan.textContent--;
        }
        newTask.remove();
        itemCountSpan.textContent--;
    })

    saveTasks();

    // alert('New TODO button clicked!')
  }