import consumer from "./consumer"
import $ from 'jquery'

window.setInterval(() => {
  let counter = document.querySelector("#counter-number")
  let vacallinaCounter = document.querySelector("#vacallina-number")
  let vacallinaNumber =  document.getElementsByClassName('x').length
  vacallinaCounter.innerHTML = vacallinaNumber + extraText(vacallinaNumber)
  $.ajax({
    url: "/visitors_counter",
    cache: false,
    type: "get",
    success: function(data){
      counter.innerHTML = data.counter
    }
  });
}, 500)

function extraText(vacallinaNumber) {
  if (vacallinaNumber > 99 && vacallinaNumber < 200){
    return " (Madre mía)"
  } else if (vacallinaNumber > 199 && vacallinaNumber < 500) {
    return " (¡Detente! ¡Aún estás a tiempo!)"
  } else if (vacallinaNumber > 499 && vacallinaNumber < 1000) {
    return " (Creo que tienes un problema)"
  } else if (vacallinaNumber > 999) {
    return " ¡HUMANOS, YA ES DEMASIADO TARDE PARA PARAR LA INVASIÓN DE LAS VACALLINAS!"
  }
  return ""
}

consumer.subscriptions.create({ channel: "MainChannel" }, {
  connected() {
    //window.setInterval(this.count, 500)
  },

  disconnected() {
    
  },

  received(data) {

  },

  count() {
    let counter = document.querySelector("#counter-number")
    $.ajax({
      url: "/visitors_counter",
      cache: false,
      type: "get",
      success: function(data){
        counter.innerHTML = data.counter
      }
    });
  }
});