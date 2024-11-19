import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js"

class TodoService {

    async deleteToDo(toDoId) {
        const confirmDelete = confirm('Are you sure you want to delete this To-Do?')
        if (confirmDelete) {
            try {
                const response = await api.delete(`/api/todos/${toDoId}`);
                console.log('To-Do deleted successfully:', response.data);
                Pop.success(`Successfully Deleted ${toDoId}`)
                AppState.todo = AppState.todo.filter(todo => todo.id !== toDoId);

            } catch (error) {
                console.error('Error deleting To-Do:', error.response?.data || error.message);
            }
        } else {
            return;
        }


    }

    async displayToDoForm() {
        const toDoFormContainer = document.getElementById('toDoFormContainer');
        const signInMessage = document.getElementById('signInMessage');

        if (AppState.account !== null) {
            toDoFormContainer.style.display = 'block';
            signInMessage.style.display = 'none';
        } else {
            toDoFormContainer.style.display = 'none';
            signInMessage.style.display = 'block';
        }
    }

    async createToDo() {
        event.preventDefault();

        //@ts-ignore
        const description = document.getElementById('toDoDescription')?.value;


        if (!description) {
            console.error('Description is required!');
            Pop.error(`Description Is Required!`)
            return;
        }

        try {
            const response = await api.post('/api/todos', { description });

            AppState.todo.push(new Todo(response.data));
            console.log('To-Do created successfully:', response.data);
            Pop.success(`Successfully Created To Do, ${response.data.description}`)

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
        Pop.success(`Successfully Loaded To Do's`)
        console.log(AppState.todo)
    }

    async completeToDo(toDoId) {
        const response = await api.put(`/api/todos/${toDoId}`, { "completed": true })
        Pop.success(`Successfully Completed To Do! Congrats!`)
        console.log(response)
    }



}

export const todoService = new TodoService()