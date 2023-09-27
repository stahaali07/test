import React from 'react';
import logoLight from '../../assets/logo-light-1.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__logoContainer'>
            <a className='navbar__logo' href='index.html'>
              <img className='navbar__logoImage' src={logoLight} alt='SaazSol Logo' />
            </a>
          </div>
          <div className='navbar__menu'>
            <ul className='navbar__menuItems'>
              <li className='navbar__menuItem'>
                <a href="index.html">Home</a>
              </li>
              <li className='navbar__menuItem'>
                <a href="index.html">About</a>
              </li>
              <li className='navbar__menuItem'>
                <a href="index.html">Services</a>
              </li>
              <li className='navbar__menuItem'>
                <a href="index.html">Blog</a>
              </li>
              <li className='navbar__menuItem'>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar