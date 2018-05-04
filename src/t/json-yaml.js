const toJsonElm = document.getElementById("to-json")
const toYamlElm = document.getElementById("to-yaml")
const clearElm = document.getElementById("clear")
const errorElm = document.getElementById("error-msg")

const flaskJson = new CodeFlask()
flaskJson.run("#json")
const flaskYaml = new CodeFlask()
flaskYaml.run("#yaml")

const getYaml = (s) => {
  try {
    errorElm.style.display = "none"
    return jsyaml.safeLoad(s)
  } catch (e) {
    errorElm.innerHTML = e.message
    errorElm.style.display = "block"
  }
}

toYamlElm.addEventListener("click", e => {
  const t = getYaml(flaskJson.textarea.value)
  if (!t) return
  flaskYaml.update(jsyaml.safeDump(t))
})

toJsonElm.addEventListener("click", e => {
  const t = getYaml(flaskYaml.textarea.value)
  if (!t) return
  flaskJson.update(JSON.stringify(t, "", "  "))
})

clearElm.addEventListener("click", e => {
  flaskJson.update("")
  flaskYaml.update("")
})