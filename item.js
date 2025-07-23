export default class Task {
    constructor (id, title, due, description, completed) {
        this.id = id;
        this.title = title;
        this.due = due;
        this.description = description;
        this.completed = completed;
    }
}