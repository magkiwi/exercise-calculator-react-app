import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')

if (root != null) {
  const dom = ReactDOM.createRoot(root)

  dom.render(<App />)
}
