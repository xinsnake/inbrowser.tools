const currentTimestampElm = document.getElementById("current-timestamp")
const currentDatetimeElm = document.getElementById("current-datetime")
const timestampElm = document.getElementById("timestamp")
const timezoneElm = document.getElementById("timezone")
const datetimeResultElm = document.getElementById("datetime-result")
const datetimeInputElm = document.getElementById("datetime-input")
const convertToTimestampElm = document.getElementById("convert-to-timestamp")
const timestampResultElm = document.getElementById("timestamp-result")
const useCurrentElm = document.getElementById("use-current")

// Update current timestamp every second
const updateCurrentTimestamp = () => {
  const now = Math.floor(Date.now() / 1000)
  currentTimestampElm.textContent = now
  currentDatetimeElm.textContent = new Date().toLocaleString()
}

updateCurrentTimestamp()
setInterval(updateCurrentTimestamp, 1000)

// Convert timestamp to datetime
const convertTimestamp = () => {
  const timestamp = parseInt(timestampElm.value)
  
  if (isNaN(timestamp)) {
    datetimeResultElm.innerHTML = '<span style="color: #999;">Enter a valid timestamp</span>'
    return
  }
  
  const date = new Date(timestamp * 1000)
  const timezone = timezoneElm.value
  
  let result = ""
  
  if (timezone === "UTC") {
    result = `
      <strong>UTC:</strong><br>
      ${date.toUTCString()}<br><br>
      <strong>ISO 8601:</strong><br>
      ${date.toISOString()}<br><br>
      <strong>Date:</strong> ${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}<br>
      <strong>Time:</strong> ${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}
    `
  } else {
    result = `
      <strong>Local:</strong><br>
      ${date.toString()}<br><br>
      <strong>ISO 8601:</strong><br>
      ${date.toISOString()}<br><br>
      <strong>Date:</strong> ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}<br>
      <strong>Time:</strong> ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}
    `
  }
  
  datetimeResultElm.innerHTML = result
}

timestampElm.addEventListener("input", convertTimestamp)
timezoneElm.addEventListener("change", convertTimestamp)

useCurrentElm.addEventListener("click", () => {
  const now = Math.floor(Date.now() / 1000)
  timestampElm.value = now
  convertTimestamp()
})

// Convert datetime to timestamp
convertToTimestampElm.addEventListener("click", () => {
  const datetimeValue = datetimeInputElm.value
  
  if (!datetimeValue) {
    timestampResultElm.innerHTML = '<span style="color: #999;">Select a date and time</span>'
    return
  }
  
  const date = new Date(datetimeValue)
  const timestamp = Math.floor(date.getTime() / 1000)
  
  timestampResultElm.innerHTML = `<strong>${timestamp}</strong>`
})

// Set current datetime in the input
window.addEventListener("load", () => {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  const localISOTime = new Date(now - offset).toISOString().slice(0, 16)
  datetimeInputElm.value = localISOTime
  
  // Set current timestamp
  timestampElm.value = Math.floor(Date.now() / 1000)
  convertTimestamp()
})
