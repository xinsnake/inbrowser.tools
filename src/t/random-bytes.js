const generateElm = document.getElementById("generate")
const byteCountElm = document.getElementById("byte-count")
const result = document.getElementById("result")

const getSelectedFormat = () => {
  const formats = document.getElementsByName("format")
  for (const format of formats) {
    if (format.checked) {
      return format.value
    }
  }
  return "hex"
}

const generateRandomBytes = (count) => {
  const bytes = new Uint8Array(count)
  crypto.getRandomValues(bytes)
  return bytes
}

const bytesToHex = (bytes) => {
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

const bytesToBase64 = (bytes) => {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

const bytesToDecimal = (bytes) => {
  return Array.from(bytes).join(', ')
}

generateElm.addEventListener("click", e => {
  const count = parseInt(byteCountElm.value) || 16
  const format = getSelectedFormat()
  
  // Limit to 1024 bytes
  const byteCount = Math.min(Math.max(count, 1), 1024)
  
  const bytes = generateRandomBytes(byteCount)
  
  let output = ""
  switch (format) {
    case "hex":
      output = bytesToHex(bytes)
      break
    case "base64":
      output = bytesToBase64(bytes)
      break
    case "decimal":
      output = bytesToDecimal(bytes)
      break
  }
  
  result.value = output
})

// Generate initial random bytes
const initialBytes = generateRandomBytes(16)
result.value = bytesToHex(initialBytes)
