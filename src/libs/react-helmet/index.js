import React from 'react'

// Minimal Helmet replacement: sets document.title and appends head children.
export const Helmet = ({ children, title }) => {
  React.useEffect(() => {
    if (title) document.title = title

    // Render any child nodes into head (usually <meta>, <style>, etc.)
    const nodes = []
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return
      const wrapper = document.createElement('div')
      // Danger: using innerHTML, but this mirrors typical Helmet behavior for simple content
      // We'll stringify the child's props.children if possible.
      try {
        wrapper.innerHTML = child.props.children || ''
        Array.from(wrapper.childNodes).forEach((n) => {
          document.head.appendChild(n.cloneNode(true))
          nodes.push(n)
        })
      } catch (e) {
        // ignore
      }
    })

    return () => {
      // Remove nodes we added
      nodes.forEach((n) => n.remove && n.remove())
    }
  }, [children, title])

  return null
}

export default Helmet
