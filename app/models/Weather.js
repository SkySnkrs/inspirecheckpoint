export class Weather {

    constructor(data) {
        this.icon = data.weather.icon
        this.description = data.weather[0].description
        this.temperature = data.main.temp
    }

    get weatherInfo() {
        return /*html*/`
        <div id="weatherTab" class="rounded m-3">
          <div class="weather-info">
            <p class="m-0">${this.temperature}</p>
            <p class="m-0">${this.description}</p>
          </div>
          <img src='${this.icon}' class="h-45 mx-2">
        </div>
        `
    }
}