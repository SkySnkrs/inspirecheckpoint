import { AuthController } from './controllers/AuthController.js';
import { CustomController } from './controllers/CustomController.js';
import { WeatherController } from './controllers/WeatherController.js';

import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  WeatherController = new WeatherController()
  CustomController = new CustomController()


  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
