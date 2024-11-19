import { AppState } from "../AppState.js"
import { customService } from "../services/CustomService.js"
import { setHTML } from "../utils/Writer.js"

export class CustomController {
    constructor() {
        this.drawTime()
        setInterval(this.drawTime, 1000)
        this.drawQuote()
        this.backgroundImage()
        customService.updateCharCount()
    }

    async drawTime() {
        await customService.updateClock()
        setHTML('currentTime', AppState.time)
    }

    async drawQuote() {
        await customService.getQuote()
        setHTML('currentQuote', AppState.quote.currentQuote)
    }

    async backgroundImage() {
        try {
            const imageUrl = await customService.getBackgroundImage();

            document.body.style.background = `url(${imageUrl}) no-repeat center center fixed`;
            document.body.style.backgroundSize = 'cover';
        } catch (error) {
            console.error("Failed to fetch or apply background image:", error);
        }
    }
}