import { AppState } from "../AppState.js"
import { customService } from "../services/CustomService.js"
import { setHTML } from "../utils/Writer.js"

export class CustomController {
    constructor() {
        this.drawTime()
        setInterval(this.drawTime, 1000)
    }

    async drawTime() {
        await customService.updateClock()
        setHTML('currentTime', AppState.time)
    }
}