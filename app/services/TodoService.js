import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

    async deleteToDo(toDoId) {
        const confirmDelete = confirm('Are you sure you want to delete this To-Do?')
        if (confirmDelete) {
            try {
                const response = await api.delete(`/api/todos/${toDoId}`);
                console.log('To-Do deleted successfully:', response.data);

                AppState.todo = AppState.todo.filter(todo => todo.id !== toDoId);

            } catch (error) {
                console.error('Error deleting To-Do:', error.response?.data || error.message);
            }
        } else {
            return;
        }


    }
    //@ts-ignore


    async createToDo() {
        event.preventDefault();

        //@ts-ignore
        const description = document.getElementById('toDoDescription')?.value;


        if (!description) {
            console.error('Description is required!');
            return;
        }

        try {
            const response = await api.post('/api/todos', { description });

            AppState.todo.push(new Todo(response.data));
            console.log('To-Do created successfully:', response.data);

            //@ts-ignore
            document.getElementById('toDoDescription').value = '';

            const charCount = document.getElementById('charCount');
            charCount.textContent = `100 characters remaining`;

            return response.data
        } catch (error) {
            console.error('Error creating To-Do:', error.response?.data || error.message);
        }

    }

    async getToDos() {
        const response = await api.get('/api/todos')

        const toDoNew = response.data.map(toDoData => new Todo(toDoData))
        AppState.todo = toDoNew
        console.log(AppState.todo)
    }

    async completeToDo(toDoId) {
        const response = await api.put(`/api/todos/${toDoId}`, { "completed": true })
        console.log(response)
    }



}

export const todoService = new TodoService()