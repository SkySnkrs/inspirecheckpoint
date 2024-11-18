
import { api } from "./AxiosService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";

class WeatherService {
    async getWeather() {
        console.log('CONNECTED TO WEATHER SERVICE')
        const response = await api.get('api/weather')
        const weatherData = new Weather(response.data)
        AppState.weather = weatherData
        console.log(AppState.weather)
    }


}

export const weatherService = new WeatherService()