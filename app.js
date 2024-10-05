document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add Task
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();

        if (task !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });
});
