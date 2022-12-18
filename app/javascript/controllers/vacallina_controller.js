import { Controller } from "@hotwired/stimulus"
import $ from 'jquery'

export default class extends Controller {
  static targets = ['image']

  duplicate() {
    var original = this.element
    var clone = original.cloneNode(true)
    var vacallinaNumber =  document.getElementsByClassName('x').length
    clone.style.animationDuration = (Math.random() * 8) + 2 + 's'
    if (vacallinaNumber > 999) {
      clone.style.filter = "invert()"
    }
    original.parentNode.insertBefore(clone, this.element)
  }
}