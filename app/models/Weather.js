export class Weather {

    constructor(data) {
        this.icon = data.weather.icon;
        this.description = data.weather[0].description;
        this.temperatureKelvin = data.main.temp;
        this.isCelsius = false;
    }


    get weatherInfo() {
        const temperature = this.isCelsius
            ? this.temperatureCelsius.toFixed(1) + " °C"
            : this.temperatureFahrenheit.toFixed(1) + " °F";

        return /*html*/ `
          <div id="weatherTab" class="rounded m-3">
            <div class="weather-info">
              <p class="m-0">${temperature}</p>
              <p class="m-0">${this.description}</p>
            </div>
            <img src='${this.icon}' class="h-45 mx-2">
          </div>
        `;
    }

    get temperatureFahrenheit() {
        return ((this.temperatureKelvin - 273.15) * 9) / 5 + 32;
    }

    get temperatureCelsius() {
        return this.temperatureKelvin - 273.15;
    }

    toggleUnit() {
        this.isCelsius = !this.isCelsius;
    }

}