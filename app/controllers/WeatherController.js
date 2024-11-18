import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        this.drawWeather()
    }

    async drawWeather() {
        try {
            await weatherService.getWeather()
            setHTML('weatherInfo', AppState.weather.weatherInfo)

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}