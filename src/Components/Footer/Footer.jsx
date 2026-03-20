import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">The Coffee Atlas</h2>
          <p>
            From the highlands of Ethiopia to your morning cup. 
            Discover the art, history, and science behind every brew.
          </p>
        </div>

        
        <div className="footer-section links">
          <h3>Explore</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#history">Coffee History</a></li>
            <li><a href="#beans">Bean Varieties</a></li>
            <li><a href="/videos">Brewing Videos</a></li>
          </ul>
        </div>

        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: brewcoffeeatlas@gmail.com</p>
          <p>Phone: +91 9122240890</p>
          <p>Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Coffee Atlas. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer