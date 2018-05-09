const flaskText = new CodeFlask()
flaskText.run("#text")
const flaskHmac = new CodeFlask()
flaskHmac.run("#hmac")
const flaskResult = new CodeFlask()
flaskResult.run("#result")

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

  const text = flaskText.textarea.value
  if (hmac) {
    const hmacText = flaskHmac.textarea.value
    flaskResult.update(o(hmacText, text))
  } else {
    flaskResult.update(o(text))
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
          flaskHmac.update("")
        }
        break
      case "method":
        method = e.target.value
        break
    }
    hash()
  })
}

flaskText.onUpdate(hash)
flaskHmac.onUpdate(hash)