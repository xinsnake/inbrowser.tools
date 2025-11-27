const textArea = document.getElementById("text")

const charCountElm = document.getElementById("char-count")
const charNoSpaceCountElm = document.getElementById("char-no-space-count")
const wordCountElm = document.getElementById("word-count")
const lineCountElm = document.getElementById("line-count")
const paragraphCountElm = document.getElementById("paragraph-count")

const updateCounts = () => {
  const text = textArea.value
  
  // Character count
  const charCount = text.length
  
  // Character count without spaces
  const charNoSpaceCount = text.replace(/\s/g, "").length
  
  // Word count
  const words = text.trim().split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length
  
  // Line count
  const lineCount = text ? text.split("\n").length : 0
  
  // Paragraph count (separated by blank lines)
  const paragraphs = text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0)
  const paragraphCount = paragraphs.length
  
  charCountElm.textContent = charCount
  charNoSpaceCountElm.textContent = charNoSpaceCount
  wordCountElm.textContent = wordCount
  lineCountElm.textContent = lineCount
  paragraphCountElm.textContent = paragraphCount
}

textArea.addEventListener('input', updateCounts)

// Initial update
updateCounts()
