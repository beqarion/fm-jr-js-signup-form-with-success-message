import { emailRGXP } from "./utilities"

const mainPage = document.getElementById("main-page")
const successPage = document.getElementById("success-page")
const form = document.getElementById("my-form")
const input = document.querySelector("#my-form input")

const btnSuccess = document.getElementById("btn-success")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  if (!validEmail(input.value)) {
    form.classList.add("error-class")
    return
  }
  form.classList.remove("error-class")
  input.value = ""
  openSuccess()
})

btnSuccess.addEventListener("click", () => {
  closeSuccess()
})

input.addEventListener("keyup", validationStyle)

// ================
// Helper functions
// ================

function openSuccess() {
  mainPage.style.zIndex = -1
  successPage.style.display = "block"
}
function closeSuccess() {
  mainPage.style.zIndex = "inherit"
  successPage.style.display = "none"
}

function validEmail(value) {
  return value.match(emailRGXP) ? true : false
}

function validationStyle() {
  if (!validEmail(input.value)) {
    form.classList.add("error-class")
  } else {
    form.classList.remove("error-class")
  }
}
