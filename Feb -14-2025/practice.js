function addTask(){document.getElementById('taskInput').ariaValueMax;
    if(task){tasks.push(task);
        document.getElementById('taskInput').value = '';
        showTasks();
    }function showTasks(){let taskList = document.getElementById('taskList')
        taskList.innerHTML = '';
        tasks.forEach((task,index) =>{taskList.innerHTML += `<li>${task}<button onclick = 'removeTask(${index})'>Remove</button></li>`})
    }
}