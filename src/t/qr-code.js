const generateElm = document.getElementById("generate")
const downloadElm = document.getElementById("download")
const sizeElm = document.getElementById("size")
const qrContainer = document.getElementById("qr-container")

const text = document.getElementById("text")

let currentQrCode = null

const generateQR = () => {
  const textValue = text.value
  
  if (!textValue.trim()) {
    qrContainer.innerHTML = '<p style="color: #999; font-style: italic;">Enter text or URL above</p>'
    currentQrCode = null
    return
  }
  
  const size = parseInt(sizeElm.value) || 256
  
  try {
    qrContainer.innerHTML = ""
    
    currentQrCode = new QRCode(qrContainer, {
      text: textValue,
      width: size,
      height: size,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    })
  } catch (err) {
    qrContainer.innerHTML = '<p style="color: #dd0000;">Error: ' + err.message + '</p>'
    currentQrCode = null
  }
}

generateElm.addEventListener("click", generateQR)

downloadElm.addEventListener("click", () => {
  if (!currentQrCode) {
    alert("Generate a QR code first")
    return
  }
  
  const canvas = qrContainer.querySelector("canvas")
  if (!canvas) {
    alert("QR code canvas not found")
    return
  }
  
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "qrcode.png"
    a.click()
    URL.revokeObjectURL(url)
  })
})

// Generate on page load with sample
window.addEventListener("load", () => {
  // Wait a bit for QRCode library to load
  setTimeout(() => {
    if (typeof QRCode !== 'undefined') {
      text.value = "https://inbrowser.tools"
      generateQR()
    }
  }, 100)
})
