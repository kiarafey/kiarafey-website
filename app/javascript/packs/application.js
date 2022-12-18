import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import $ from 'jquery'
import "channels"
import "../controllers"
import "../controllers/vacallina_controller"

Rails.start()
Turbolinks.start()
ActiveStorage.start()