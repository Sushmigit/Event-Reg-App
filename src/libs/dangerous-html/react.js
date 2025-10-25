import React from 'react'

// Minimal Script component that injects raw HTML or script/styles into the DOM.
const Script = ({ html = '', ...rest }) => {
  // If html contains a <script> tag, insert it using DOM APIs to allow execution.
  React.useEffect(() => {
    if (!html) return

    const template = document.createElement('template')
    template.innerHTML = html.trim()

    Array.from(template.content.childNodes).forEach((node) => {
      // For scripts, clone and set async/defer attributes appropriately
      if (node.nodeName === 'SCRIPT') {
        const script = document.createElement('script')
        if (node.src) script.src = node.src
        script.text = node.textContent
        if (node.hasAttribute && node.hasAttribute('defer')) script.defer = true
        document.body.appendChild(script)
      } else {
        document.head.appendChild(node)
      }
    })

    return () => {
      // No-op cleanup; leaving styles/scripts is fine for this shim.
    }
  }, [html])

  return null
}

export default Script
