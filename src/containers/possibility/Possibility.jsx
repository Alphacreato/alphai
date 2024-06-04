import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className="alpha_possibility section_padding" id="possibility">
      <div className="alpha_possibility-image">
          <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="alpha_possibility-content">
        <h4>Sign Up for Early Access to Get Started</h4>
        <h1 className='gradient_text'>The possibilities are beyond your wildest dreams</h1>
        <p>the opportunities or potential outcomes are so vast and extraordinary that they surpass even your most ambitious or imaginative expectations. It suggests that what can be achieved or experienced is far greater than anything you could have envisioned.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility