const encodeElm = document.getElementById("encode")
const decodeElm = document.getElementById("decode")
const clearElm = document.getElementById("clear")

const flaskPlain = new CodeFlask()
flaskPlain.run("#plain")
const flaskEncoded = new CodeFlask()
flaskEncoded.run("#encoded")

encodeElm.addEventListener("click", e => {
  flaskEncoded.update(btoa(flaskPlain.textarea.value))
})

decodeElm.addEventListener("click", e => {
  flaskPlain.update(atob(flaskEncoded.textarea.value))
})

clearElm.addEventListener("click", e => {
  flaskEncoded.update("")
  flaskPlain.update("")
})