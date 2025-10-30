import React from 'react'
import "./Header.css"

function Header() {

  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <h2 className='logo'>shopify</h2>
      <ul style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "1rem", listStyleType: "none"}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
