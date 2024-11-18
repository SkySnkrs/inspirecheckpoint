import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        this.drawWeather()
        this.addToggleListener();
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

    addToggleListener() {
        const toggle = document.getElementById("unitToggle");
        if (toggle) {
            toggle.addEventListener("change", () => {
                // Toggle the unit in the Weather model
                AppState.weather.toggleUnit();

                // Re-render the weather info with the updated unit
                setHTML('weatherInfo', AppState.weather.weatherInfo);
            });
        }
    }
}