const prettifyElm = document.getElementById("prettify")
const minifyElm = document.getElementById("minify")
const errorElm = document.getElementById("error-msg")

const flaskJson = new CodeFlask()
flaskJson.run("#json")

const getJSON = () => {
  try {
    errorElm.style.display = "none"
    return JSON.parse(flaskJson.textarea.value)
  } catch (e) {
    errorElm.innerHTML = e.message
    errorElm.style.display = "block"
  }
}

prettifyElm.addEventListener("click", e => {
  const t = getJSON()
  if (!t) return
  flaskJson.update(JSON.stringify(t, "", "  "))
})

minifyElm.addEventListener("click", e => {
  const t = getJSON()
  if (!t) return
  flaskJson.update(JSON.stringify(t))
})
