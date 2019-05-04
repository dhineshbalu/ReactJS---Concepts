import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
      <div>
          Portal Demo
      </div>,
      document.getElementById("root1")
  )
}

export default Portal;