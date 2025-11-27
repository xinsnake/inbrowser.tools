const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const generateElm = document.getElementById("generate")
const quantityElm = document.getElementById("quantity")
const result = document.getElementById("result")

generateElm.addEventListener("click", e => {
  const quantity = parseInt(quantityElm.value) || 1
  const uuids = []
  
  for (let i = 0; i < Math.min(quantity, 100); i++) {
    uuids.push(generateUUID())
  }
  
  result.value = uuids.join("\n")
})

// Generate one UUID on page load
result.value = generateUUID()
