const clearElm = document.getElementById("clear")
const errorElm = document.getElementById("error-msg")

const binary = document.getElementById("binary")
const decimal = document.getElementById("decimal")
const hex = document.getElementById("hex")

let isUpdating = false

const showError = (message) => {
  errorElm.innerHTML = message
  errorElm.style.display = "block"
}

const hideError = () => {
  errorElm.style.display = "none"
}

const updateFromBinary = (binaryValue) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    hideError()
    binaryValue = binaryValue.replace(/\s/g, "")
    
    if (!binaryValue) {
      decimal.value = ""
      hex.value = ""
      isUpdating = false
      return
    }
    
    if (!/^[01]+$/.test(binaryValue)) {
      showError("Invalid binary number. Use only 0 and 1.")
      isUpdating = false
      return
    }
    
    const decimalValue = parseInt(binaryValue, 2)
    if (isNaN(decimalValue)) {
      showError("Invalid binary number.")
      isUpdating = false
      return
    }
    
    decimal.value = decimalValue.toString()
    hex.value = decimalValue.toString(16).toUpperCase()
  } catch (err) {
    showError("Error: " + err.message)
  }
  
  isUpdating = false
}

const updateFromDecimal = (decimalValue) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    hideError()
    decimalValue = decimalValue.replace(/\s/g, "")
    
    if (!decimalValue) {
      binary.value = ""
      hex.value = ""
      isUpdating = false
      return
    }
    
    if (!/^-?\d+$/.test(decimalValue)) {
      showError("Invalid decimal number.")
      isUpdating = false
      return
    }
    
    const num = parseInt(decimalValue, 10)
    if (isNaN(num)) {
      showError("Invalid decimal number.")
      isUpdating = false
      return
    }
    
    if (num < 0) {
      showError("Negative numbers not supported.")
      isUpdating = false
      return
    }
    
    binary.value = num.toString(2)
    hex.value = num.toString(16).toUpperCase()
  } catch (err) {
    showError("Error: " + err.message)
  }
  
  isUpdating = false
}

const updateFromHex = (hexValue) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    hideError()
    hexValue = hexValue.replace(/\s/g, "")
    
    if (!hexValue) {
      binary.value = ""
      decimal.value = ""
      isUpdating = false
      return
    }
    
    if (!/^[0-9A-Fa-f]+$/.test(hexValue)) {
      showError("Invalid hex number. Use only 0-9 and A-F.")
      isUpdating = false
      return
    }
    
    const decimalValue = parseInt(hexValue, 16)
    if (isNaN(decimalValue)) {
      showError("Invalid hex number.")
      isUpdating = false
      return
    }
    
    binary.value = decimalValue.toString(2)
    decimal.value = decimalValue.toString()
  } catch (err) {
    showError("Error: " + err.message)
  }
  
  isUpdating = false
}

binary.addEventListener('input', () => {
  updateFromBinary(binary.value)
})

decimal.addEventListener('input', () => {
  updateFromDecimal(decimal.value)
})

hex.addEventListener('input', () => {
  updateFromHex(hex.value)
})

clearElm.addEventListener("click", e => {
  hideError()
  isUpdating = true
  binary.value = ""
  decimal.value = ""
  hex.value = ""
  isUpdating = false
})
