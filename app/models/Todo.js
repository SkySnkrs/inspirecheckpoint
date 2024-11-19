export class Todo {
    constructor(data) {
        this.description = data.description
        this.id = data.id
        this.completed = data.completed
    }

    get todoTemplate() {
        return `
         <div class="todo-item">
            <button class="btn btn-danger" onclick='app.TodoController.deleteToDo("${this.id}")'><i class="mdi mdi-trash-can fs-6"></i></button>
            <label for="todo1" class="todo-title text-start fs-6">
                ${this.description}
            </label>
            <input type="checkbox" id="todo1" name="todo1" onchange='app.TodoController.completeToDo("${this.id}")' ${this.completed ? "checked" : ""}>
        </div>
        <hr>
        `
    }
}