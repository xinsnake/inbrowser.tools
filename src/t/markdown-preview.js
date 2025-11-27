const copyHtmlElm = document.getElementById("copy-html")
const previewElm = document.getElementById("preview")

const markdown = document.getElementById("markdown")

let currentHtml = ""

const updatePreview = () => {
  const markdownValue = markdown.value
  
  if (!markdownValue.trim()) {
    previewElm.innerHTML = '<p style="color: #999; font-style: italic;">Preview will appear here...</p>'
    currentHtml = ""
    return
  }
  
  try {
    currentHtml = marked.parse(markdownValue)
    previewElm.innerHTML = currentHtml
  } catch (e) {
    previewElm.innerHTML = '<p style="color: #dd0000;">Error parsing markdown: ' + e.message + '</p>'
    currentHtml = ""
  }
}

copyHtmlElm.addEventListener("click", () => {
  if (!currentHtml) {
    alert("No HTML to copy")
    return
  }
  
  navigator.clipboard.writeText(currentHtml).then(() => {
    const originalText = copyHtmlElm.textContent
    copyHtmlElm.textContent = "Copied!"
    setTimeout(() => {
      copyHtmlElm.textContent = originalText
    }, 2000)
  }).catch(err => {
    alert("Failed to copy: " + err.message)
  })
})

markdown.addEventListener('input', updatePreview)

// Set sample markdown on load
window.addEventListener("load", () => {
  const sampleMarkdown = `# Hello World

This is a **markdown** preview tool.

## Features
- Convert markdown to HTML
- Live preview
- Copy HTML output

\`\`\`javascript
console.log("Code blocks work too!");
\`\`\`

> Blockquotes are supported as well.`
  
  markdown.value = sampleMarkdown
  updatePreview()
})
