const decodeElm = document.getElementById("decode")
const clearElm = document.getElementById("clear")
const jwtInput = document.getElementById("jwt-input")
const headerOutput = document.getElementById("header")
const payloadOutput = document.getElementById("payload")
const signatureOutput = document.getElementById("signature")
const errorElm = document.getElementById("error-msg")

const base64UrlDecode = (str) => {
  // Replace URL-safe characters
  str = str.replace(/-/g, '+').replace(/_/g, '/')
  
  // Pad with = to make length multiple of 4
  while (str.length % 4) {
    str += '='
  }
  
  // Decode base64
  const decoded = atob(str)
  
  // Convert to UTF-8
  return decodeURIComponent(
    decoded.split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join('')
  )
}

const decodeJWT = () => {
  errorElm.style.display = "none"
  headerOutput.value = ""
  payloadOutput.value = ""
  signatureOutput.value = ""
  
  let token = jwtInput.value.trim()
  
  // Remove "Bearer " prefix if present (case-insensitive)
  if (token.toLowerCase().startsWith('bearer ')) {
    token = token.substring(7).trim()
  }
  
  if (!token) {
    errorElm.textContent = "Please enter a JWT token"
    errorElm.style.display = "block"
    return
  }
  
  const parts = token.split('.')
  
  if (parts.length !== 3) {
    errorElm.textContent = "Invalid JWT format. JWT must have 3 parts separated by dots (header.payload.signature)"
    errorElm.style.display = "block"
    return
  }
  
  try {
    // Decode header
    const headerJson = base64UrlDecode(parts[0])
    const header = JSON.parse(headerJson)
    headerOutput.value = JSON.stringify(header, null, 2)
    
    // Decode payload
    const payloadJson = base64UrlDecode(parts[1])
    const payload = JSON.parse(payloadJson)
    
    // Format common JWT claims nicely
    if (payload.exp) {
      payload._exp_readable = new Date(payload.exp * 1000).toISOString()
    }
    if (payload.iat) {
      payload._iat_readable = new Date(payload.iat * 1000).toISOString()
    }
    if (payload.nbf) {
      payload._nbf_readable = new Date(payload.nbf * 1000).toISOString()
    }
    
    payloadOutput.value = JSON.stringify(payload, null, 2)
    
    // Show signature (base64url encoded)
    signatureOutput.value = parts[2]
    
  } catch (err) {
    errorElm.textContent = "Error decoding JWT: " + err.message
    errorElm.style.display = "block"
  }
}

const clearAll = () => {
  jwtInput.value = ""
  headerOutput.value = ""
  payloadOutput.value = ""
  signatureOutput.value = ""
  errorElm.style.display = "none"
}

decodeElm.addEventListener("click", decodeJWT)
clearElm.addEventListener("click", clearAll)

// Auto-decode on input change
jwtInput.addEventListener("input", () => {
  if (jwtInput.value.trim().length > 0) {
    decodeJWT()
  }
})
