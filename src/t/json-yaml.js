const toJsonElm = document.getElementById("to-json")
const toYamlElm = document.getElementById("to-yaml")
const clearElm = document.getElementById("clear")
const errorElm = document.getElementById("error-msg")

const json = document.getElementById("json")
const yaml = document.getElementById("yaml")

const getYaml = (s) => {
  try {
    errorElm.style.display = "none"
    return jsyaml.load(s)
  } catch (e) {
    errorElm.innerHTML = e.message
    errorElm.style.display = "block"
  }
}

toYamlElm.addEventListener("click", e => {
  const t = getYaml(json.value)
  if (!t) return
  yaml.value = jsyaml.dump(t)
})

toJsonElm.addEventListener("click", e => {
  const t = getYaml(yaml.value)
  if (!t) return
  json.value = JSON.stringify(t, "", "  ")
})

clearElm.addEventListener("click", e => {
  json.value = ""
  yaml.value = ""
})