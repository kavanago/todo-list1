let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
        todos.push(task);
        input.value = '';
        renderTodos();
    }
}

function editTodo(index) {
    const newTask = prompt("Edit your task", todos[index]);
    if (newTask !== null) {
        todos[index] = newTask.trim();
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="edit" onclick="editTodo(${index})">Edit</button>
                <button class="delete" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
}
