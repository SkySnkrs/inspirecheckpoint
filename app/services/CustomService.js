import { AppState } from "../AppState.js";
import { Custom } from "../models/Custom.js";
import { api } from "./AxiosService.js";



class CustomService {

    updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');

        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const timeString = `${hours}:${minutes}:${seconds} ${period}`;
        AppState.time = timeString
    }

    async getBackgroundImage() {
        const response = await api.get('api/images')
        const image = response.data.largeImgUrl
        return image
    }

    async getQuote() {
        const response = await api.get('api/quotes')
        const currentQuote = new Custom(response.data)
        AppState.quote = currentQuote
        console.log(AppState.quote)
    }

    updateCharCount() {
        const input = document.getElementById('toDoDescription');
        const charCount = document.getElementById('charCount');

        if (input instanceof HTMLInputElement && charCount instanceof HTMLElement) {
            input.addEventListener('input', () => {
                const remaining = 100 - input.value.length;
                charCount.textContent = `${remaining} characters remaining`;
            });
        } else {
            console.error('Required elements are not of the correct type.');
        }
    }



}


export const customService = new CustomService()
