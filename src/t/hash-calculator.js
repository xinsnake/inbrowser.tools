const text = document.getElementById("text")
const hmacInput = document.getElementById("hmac")
const result = document.getElementById("result")

let method = ""
let hmac = false

const getCryptObj = () => {
  let clsName = (hmac) ? "Hmac" : ""
  clsName += method
  if (typeof CryptoJS[clsName] === 'function') {
    return CryptoJS[clsName]
  }
}

const hash = () => {
  if (!method) return

  const o = getCryptObj()
  if (!o) {
    return
  }

  const textValue = text.value
  if (hmac) {
    const hmacText = hmacInput.value
    result.value = o(hmacText, textValue)
  } else {
    result.value = o(textValue)
  }
}

const inputs = document.getElementsByTagName("input")
for (const i of inputs) {
  i.addEventListener("input", (e) => {
    const inputName = e.target.name
    switch (inputName) {
      case "hmac":
        const hmacDiv = document.getElementsByClassName("hmac")[0]
        hmac = e.target.checked
        if (hmac) {
          hmacDiv.style.display = "block"
        } else {
          hmacDiv.style.display = "none"
          hmacInput.value = ""
        }
        break
      case "method":
        method = e.target.value
        break
    }
    hash()
  })
}

text.addEventListener('input', hash)
hmacInput.addEventListener('input', hash)