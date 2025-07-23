import Task from "./item.js";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

const addTask = () => {
    const id = Date.now();
    const title = document.querySelector("#title");
    const due = document.querySelector("#date");
    const description = document.querySelector("#description");
    const newTask = new Task(id, title.value, due.value, description.value, false);

    tasks.push(newTask);
    updateTasks();
}

const renderTasks = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    tasks.forEach(task => {
        const parentDiv = document.createElement("div");
        parentDiv.id = task.id;
        parentDiv.classList.add("task")

        const title = document.createElement("h1");
        title.innerHTML = task.title;
        const due = document.createElement("h3");
        due.innerHTML = `Due: ${task.due}`;
        const description = document.createElement("p");
        description.innerHTML = task.description;

        const detailsButton = document.createElement("button");
        detailsButton.innerHTML = "Details";
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "Complete";

        completeButton.addEventListener("click", completeTask);

        parentDiv.appendChild(title);
        parentDiv.appendChild(due);
        parentDiv.appendChild(description);
        parentDiv.appendChild(detailsButton)
        parentDiv.appendChild(completeButton)
        contentDiv.appendChild(parentDiv);
    });
}

const completeTask = (e) => {
    const selectedTask = e.target.parentElement;
    for (const task of tasks) {
        if(selectedTask.id == task.id){
            completedTasks.push(task);
            tasks.splice(task, 1)
            selectedTask.remove();
            updateTasks();
            break;
        }
    }
}

const updateTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

document.querySelector("#add").addEventListener("click", () => {
    addTask();
    renderTasks();
})

renderTasks();
