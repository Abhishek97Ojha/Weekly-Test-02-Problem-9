import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
          <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="#" />
        </div>
        <div className="right">
          <a href="https://cred.club/check-your-credit-score">credit score check</a>
          <a href="https://cred.club/cred-pay?source=homepage_header">CRED pay</a>
        </div>
      </div>
  )
}

export default Navbar