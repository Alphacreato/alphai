import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.png'
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#alpha">What is ALPHA</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>  
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="alpha_navbar">
      <div className="alpha_navbar-links">
         <div className="alpha_navbar-links_logo">
           <img src={logo} alt="logo" />
         </div>
          <div className="alpha_navbar-links_container">
            <Menu/>
          </div>
      </div>
      <div className="alpha_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="alpha_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="alpha_navbar-menu_container scale-up-center">
          <div className="alpha_navbar-menu_container-links">
           <Menu/>
            <div className="alpha_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        </div>
        )}
      </div>
     
    </div>
    
  );
};

export default Navbar