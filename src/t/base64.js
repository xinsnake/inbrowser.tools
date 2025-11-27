const encodeElm = document.getElementById("encode")
const decodeElm = document.getElementById("decode")
const clearElm = document.getElementById("clear")

const plainText = document.getElementById("plain")
const encodedText = document.getElementById("encoded")

encodeElm.addEventListener("click", e => {
  try {
    encodedText.value = btoa(plainText.value)
  } catch (err) {
    alert("Encoding error: " + err.message)
  }
})

decodeElm.addEventListener("click", e => {
  try {
    plainText.value = atob(encodedText.value)
  } catch (err) {
    alert("Decoding error: " + err.message)
  }
})

clearElm.addEventListener("click", e => {
  encodedText.value = ""
  plainText.value = ""
})