const generateElm = document.getElementById("generate")
const lengthElm = document.getElementById("length")
const quantityElm = document.getElementById("quantity")
const charCheckboxes = document.querySelectorAll('input[name="chars"]')

const result = document.getElementById("result")

const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
}

const generatePassword = (length, enabledSets) => {
  if (enabledSets.length === 0) {
    return ""
  }
  
  let chars = ""
  enabledSets.forEach(set => {
    chars += charSets[set]
  })
  
  let password = ""
  const array = new Uint32Array(length)
  crypto.getRandomValues(array)
  
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length]
  }
  
  return password
}

generateElm.addEventListener("click", e => {
  const length = parseInt(lengthElm.value) || 16
  const quantity = parseInt(quantityElm.value) || 1
  
  const enabledSets = []
  charCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      enabledSets.push(checkbox.value)
    }
  })
  
  if (enabledSets.length === 0) {
    alert("Please select at least one character type")
    return
  }
  
  const passwords = []
  for (let i = 0; i < Math.min(quantity, 50); i++) {
    passwords.push(generatePassword(Math.min(Math.max(length, 4), 128), enabledSets))
  }
  
  result.value = passwords.join("\n")
})

// Generate one password on page load
window.addEventListener("load", () => {
  result.value = generatePassword(16, ["uppercase", "lowercase", "numbers", "symbols"])
})
