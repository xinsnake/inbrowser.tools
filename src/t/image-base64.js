const selectFileElm = document.getElementById("select-file")
const fileInputElm = document.getElementById("file-input")
const fileInfoElm = document.getElementById("file-info")
const imagePreviewElm = document.getElementById("image-preview")
const copyBase64Elm = document.getElementById("copy-base64")
const downloadTxtElm = document.getElementById("download-txt")

const base64 = document.getElementById("base64")

let currentBase64 = ""

selectFileElm.addEventListener("click", () => {
  fileInputElm.click()
})

fileInputElm.addEventListener("change", (e) => {
  const file = e.target.files[0]
  
  if (!file) {
    return
  }
  
  if (!file.type.startsWith("image/")) {
    alert("Please select an image file")
    return
  }
  
  fileInfoElm.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`
  
  const reader = new FileReader()
  
  reader.onload = (event) => {
    const base64String = event.target.result
    currentBase64 = base64String
    
    // Show preview
    imagePreviewElm.innerHTML = `<img src="${base64String}" style="max-width: 100%; border: 1px solid #ddd; border-radius: 5px;">`
    
    // Show base64 (truncated for display)
    const displayBase64 = base64String.length > 10000 
      ? base64String.substring(0, 10000) + "\n\n... (truncated, " + base64String.length + " characters total)"
      : base64String
    
    base64.value = displayBase64
    
    // Show buttons
    copyBase64Elm.style.display = "inline-block"
    downloadTxtElm.style.display = "inline-block"
  }
  
  reader.readAsDataURL(file)
})

copyBase64Elm.addEventListener("click", () => {
  if (!currentBase64) {
    alert("No base64 to copy")
    return
  }
  
  navigator.clipboard.writeText(currentBase64).then(() => {
    const originalText = copyBase64Elm.textContent
    copyBase64Elm.textContent = "Copied!"
    setTimeout(() => {
      copyBase64Elm.textContent = originalText
    }, 2000)
  }).catch(err => {
    alert("Failed to copy: " + err.message)
  })
})

downloadTxtElm.addEventListener("click", () => {
  if (!currentBase64) {
    alert("No base64 to download")
    return
  }
  
  const blob = new Blob([currentBase64], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "image-base64.txt"
  a.click()
  URL.revokeObjectURL(url)
})
