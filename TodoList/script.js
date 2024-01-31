document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        taskItem.remove();
      });
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  });
  