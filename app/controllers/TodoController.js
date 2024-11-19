import { AppState } from "../AppState.js"
import { todoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
    constructor() {
        AppState.on('account', this.getTodos)
        AppState.on('todo', this.drawToDo)
        AppState.on('todo', this.toDoCount)
        AppState.on('account', this.displayToDoForm)
    }

    async displayToDoForm() {
        await todoService.displayToDoForm()
    }

    drawToDo() {
        let toDoHTML = ''
        AppState.todo.forEach(todos => {
            toDoHTML += todos.todoTemplate;
        });
        setHTML('toDoList', toDoHTML)
    }


    toDoCount() {
        setHTML('totalToDos', AppState.todo.length)
    }

    async getTodos() {
        try {
            await todoService.getToDos()
        } catch (error) {
            console.log(error)
            Pop.toast('Cannot Fetch To Dos')
        }

    }

    async createToDo() {
        await todoService.createToDo()
    }

    async deleteToDo(toDoId) {
        await todoService.deleteToDo(toDoId)
    }


    async completeToDo(toDoId) {
        await todoService.completeToDo(toDoId)
    }

}