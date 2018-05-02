const plainElm = document.getElementById("plain")
const encodeElm = document.getElementById("encode")
const decodeElm = document.getElementById("decode")
const encodedElm = document.getElementById("encoded")
const clearElm = document.getElementById("clear")

encodeElm.addEventListener("click", e => {
  e.preventDefault()
  const plainText = plainElm.value
  encodedElm.value = btoa(plainText)
})

decodeElm.addEventListener("click", e => {
  e.preventDefault()
  const encodedText = encodedElm.value
  plainElm.value = atob(encodedText)
})

clearElm.addEventListener("click", e => {
  e.preventDefault()
  encodedElm.value = ""
  plainElm.value = ""
})
