import Task from "./item.js";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = () => {
    const id = Date.now();
    const title = document.querySelector("#title");
    const due = document.querySelector("#date");
    const description = document.querySelector("#description");
    const newTask = new Task(id, title.value, due.value, description.value, false);

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const renderTasks = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    tasks.forEach(task => {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("task")
        const title = document.createElement("h1");
        title.innerHTML = task.title;
        const due = document.createElement("h3");
        due.innerHTML = `Due: ${task.due}`;
        const description = document.createElement("p");
        description.innerHTML = task.description;
        parentDiv.appendChild(title);
        parentDiv.appendChild(due);
        parentDiv.appendChild(description);
        contentDiv.appendChild(parentDiv);
    });
}

document.querySelector("#add").addEventListener("click", () => {
    addTask();
    renderTasks();
})

renderTasks();