import * as React from 'react'

declare module 'dangerous-html/react' {
  const Script: React.FC<Record<string, any>>
  export default Script
}

declare module 'dangerous-html' {
  const _default: any
  export default _default
}
