import { AppState } from "../AppState.js";



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


}


export const customService = new CustomService()
