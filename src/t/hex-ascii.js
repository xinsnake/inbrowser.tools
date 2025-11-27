const toAsciiElm = document.getElementById("to-ascii")
const toHexElm = document.getElementById("to-hex")
const clearElm = document.getElementById("clear")
const errorElm = document.getElementById("error-msg")

const hex = document.getElementById("hex")
const ascii = document.getElementById("ascii")

const showError = (message) => {
  errorElm.innerHTML = message
  errorElm.style.display = "block"
}

const hideError = () => {
  errorElm.style.display = "none"
}

toAsciiElm.addEventListener("click", e => {
  try {
    hideError()
    const hexValue = hex.value.replace(/\s/g, "")
    
    if (!hexValue) {
      ascii.value = ""
      return
    }
    
    // Validate hex string
    if (!/^[0-9A-Fa-f]*$/.test(hexValue)) {
      showError("Invalid hex string. Use only 0-9 and A-F characters.")
      return
    }
    
    if (hexValue.length % 2 !== 0) {
      showError("Hex string must have an even number of characters.")
      return
    }
    
    let asciiValue = ""
    for (let i = 0; i < hexValue.length; i += 2) {
      const byte = parseInt(hexValue.substr(i, 2), 16)
      asciiValue += String.fromCharCode(byte)
    }
    
    ascii.value = asciiValue
  } catch (err) {
    showError("Error converting to ASCII: " + err.message)
  }
})

toHexElm.addEventListener("click", e => {
  try {
    hideError()
    const asciiValue = ascii.value
    
    if (!asciiValue) {
      hex.value = ""
      return
    }
    
    let hexValue = ""
    for (let i = 0; i < asciiValue.length; i++) {
      const byte = asciiValue.charCodeAt(i).toString(16).padStart(2, '0')
      hexValue += byte
    }
    
    hex.value = hexValue.toUpperCase()
  } catch (err) {
    showError("Error converting to hex: " + err.message)
  }
})

clearElm.addEventListener("click", e => {
  hideError()
  hex.value = ""
  ascii.value = ""
})
