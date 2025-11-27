const prettifyElm = document.getElementById("prettify")
const minifyElm = document.getElementById("minify")
const errorElm = document.getElementById("error-msg")

const json = document.getElementById("json")

const getJSON = () => {
  try {
    errorElm.style.display = "none"
    return JSON.parse(json.value)
  } catch (e) {
    errorElm.innerHTML = e.message
    errorElm.style.display = "block"
  }
}

prettifyElm.addEventListener("click", e => {
  const t = getJSON()
  if (!t) return
  json.value = JSON.stringify(t, "", "  ")
})

minifyElm.addEventListener("click", e => {
  const t = getJSON()
  if (!t) return
  json.value = JSON.stringify(t)
})
