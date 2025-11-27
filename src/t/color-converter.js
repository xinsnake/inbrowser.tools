const colorPickerElm = document.getElementById("color-picker")
const colorPreviewElm = document.getElementById("color-preview")
const hexElm = document.getElementById("hex")
const rgbElm = document.getElementById("rgb")
const hslElm = document.getElementById("hsl")

let isUpdating = false

// Convert hex to RGB
const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "")
  
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("")
  }
  
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  return { r, g, b }
}

// Convert RGB to hex
const rgbToHex = (r, g, b) => {
  return "#" + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }).join("")
}

// Convert RGB to HSL
const rgbToHsl = (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255
  
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2
  
  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  }
}

// Convert HSL to RGB
const hslToRgb = (h, s, l) => {
  h /= 360
  s /= 100
  l /= 100
  
  let r, g, b
  
  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1/6) return p + (q - p) * 6 * t
      if (t < 1/2) return q
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
      return p
    }
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}

const updateAllFromHex = (hex) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    const rgb = hexToRgb(hex)
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
    
    colorPickerElm.value = hex
    colorPreviewElm.style.backgroundColor = hex
    rgbElm.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    hslElm.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
  } catch (e) {
    // Invalid hex, ignore
  }
  
  isUpdating = false
}

const updateAllFromRgb = (rgbStr) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    const match = rgbStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (match) {
      const r = parseInt(match[1])
      const g = parseInt(match[2])
      const b = parseInt(match[3])
      
      const hex = rgbToHex(r, g, b)
      const hsl = rgbToHsl(r, g, b)
      
      hexElm.value = hex
      colorPickerElm.value = hex
      colorPreviewElm.style.backgroundColor = hex
      hslElm.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    }
  } catch (e) {
    // Invalid RGB, ignore
  }
  
  isUpdating = false
}

const updateAllFromHsl = (hslStr) => {
  if (isUpdating) return
  isUpdating = true
  
  try {
    const match = hslStr.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
    if (match) {
      const h = parseInt(match[1])
      const s = parseInt(match[2])
      const l = parseInt(match[3])
      
      const rgb = hslToRgb(h, s, l)
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b)
      
      hexElm.value = hex
      colorPickerElm.value = hex
      colorPreviewElm.style.backgroundColor = hex
      rgbElm.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    }
  } catch (e) {
    // Invalid HSL, ignore
  }
  
  isUpdating = false
}

colorPickerElm.addEventListener("input", (e) => {
  updateAllFromHex(e.target.value)
})

hexElm.addEventListener("input", (e) => {
  updateAllFromHex(e.target.value)
})

rgbElm.addEventListener("input", (e) => {
  updateAllFromRgb(e.target.value)
})

hslElm.addEventListener("input", (e) => {
  updateAllFromHsl(e.target.value)
})

// Initialize
window.addEventListener("load", () => {
  updateAllFromHex("#3498db")
})
