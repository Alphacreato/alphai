import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="alpha_header section_padding" id="home">
      <div className="alpha_header-content">
        <h1 className="gradient_text">Let's create something extraordinary using ALPHA OpenAI</h1>
        <p>However, staying in a comfortable bed didn't seem appealing when seeking assistance for travel. Not all thoughts involve the enjoyment of exercise. The indulgent path involves altering joy through lively attachments. Over the years, we've been asked to permit parties in a certain manner.</p>

        <div className="alpha_header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="alpha_header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
         <div className="alpha_header-image">
           <img src={ai} />
         </div>
    </div>
  )
}

export default Header