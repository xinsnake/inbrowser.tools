const generateElm = document.getElementById("generate")
const minElm = document.getElementById("min")
const maxElm = document.getElementById("max")
const quantityElm = document.getElementById("quantity")
const uniqueElm = document.getElementById("unique")
const sortedElm = document.getElementById("sorted")

const result = document.getElementById("result")

const getRandomInt = (min, max) => {
  const range = max - min + 1
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return min + (array[0] % range)
}

const generateNumbers = (min, max, quantity, unique, sorted) => {
  if (min > max) {
    [min, max] = [max, min]
  }
  
  const range = max - min + 1
  
  if (unique && quantity > range) {
    alert(`Cannot generate ${quantity} unique numbers in range ${min}-${max}. Maximum is ${range}.`)
    quantity = range
  }
  
  const numbers = []
  
  if (unique) {
    const available = []
    for (let i = min; i <= max; i++) {
      available.push(i)
    }
    
    for (let i = 0; i < quantity; i++) {
      const index = getRandomInt(0, available.length - 1)
      numbers.push(available[index])
      available.splice(index, 1)
    }
  } else {
    for (let i = 0; i < quantity; i++) {
      numbers.push(getRandomInt(min, max))
    }
  }
  
  if (sorted) {
    numbers.sort((a, b) => a - b)
  }
  
  return numbers
}

generateElm.addEventListener("click", e => {
  const min = parseInt(minElm.value) || 0
  const max = parseInt(maxElm.value) || 100
  const quantity = Math.min(parseInt(quantityElm.value) || 1, 1000)
  const unique = uniqueElm.checked
  const sorted = sortedElm.checked
  
  const numbers = generateNumbers(min, max, quantity, unique, sorted)
  result.value = numbers.join("\n")
})

// Generate one number on page load
window.addEventListener("load", () => {
  result.value = getRandomInt(1, 100).toString()
})
