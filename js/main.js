import { emailRGXP } from "./utilities"

const mainPage = document.getElementById("main-page")
const successPage = document.getElementById("success-page")
const form = document.getElementById("my-form")
const input = document.querySelector("#my-form input")

const btnSuccess = document.getElementById("btn-success")

const domEmail = document.getElementById("my-email")
const defaultText = domEmail.innerText
let email = ""

form.addEventListener("submit", function (e) {
  e.preventDefault()
  if (!validEmail(input.value)) {
    form.classList.add("error-class")
    return
  }
  form.classList.remove("error-class")
  openSuccess(input.value)
  input.value = ""
})

btnSuccess.addEventListener("click", () => {
  closeSuccess()
})

input.addEventListener("keyup", validationStyle)

// ================
// Helper functions
// ================

function openSuccess(emailTxt) {
  mainPage.style.zIndex = -1
  successPage.style.display = "block"
  domEmail.innerText = emailTxt
}
function closeSuccess() {
  mainPage.style.zIndex = "inherit"
  successPage.style.display = "none"
  domEmail.innerText = defaultText
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
