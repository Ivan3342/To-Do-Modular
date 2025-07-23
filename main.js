import Task from "./item";

const addTask = () => {
    const id = Date.now();
    const title = document.querySelector("#title");
    const due = document.querySelector("#date");
    const description = document.querySelector("#description");
    const newTask = new Task(id, title.value, due.value, description.value, false);

    console.log(newTask);
}

document.querySelector("#add").addEventListener("click", () => {
    addTask();
})