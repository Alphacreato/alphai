import React from 'react'
import logo from '../../assets/Logo.png'
import './footer.css';

const Footer = () => {
  return (
    <div className="alpha_footer section__padding">
      <div className="alpha_footer-heading">
        <h1 className="gradient_text">Do you want to step in to the future before others</h1>
      </div>

      <div className="alpha_footer-btn">
      <p>Request Early Access</p>
      </div>
      
      <div className="alpha_footer-links">
        <div className="alpha_footer-links_logo">
          <img src={logo} alt="alpha_logo" />
          <p>Ogbonna Dandy, <br /> All Rights Reserved</p>
        </div>
        <div className="alpha_footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="alpha_footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="alpha_footer-links_div">
          <h4>Get in touch</h4>
          <p>Lagos</p>
          <p>+234-906-395-1220</p>
          <p>dandykelvin98@gmail.com</p>
        </div>
    </div>

    <div className="alpha_footer-copyright">
      <p>@2022 Alpha. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer