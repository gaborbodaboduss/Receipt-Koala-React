import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-branding">
            <Link to="/" className="navbar-navlink">
              <img
                alt={props.brandingAlt}
                src={props.brandingSrc}
                className="navbar-finbest"
              />
            </Link>
          </div>
          <div className="navbar-links">
            <a href="#Features" className="navbar-link link">
              {props.link1}
            </a>
            <a href="#Steps" className="navbar-link1 link">
              {props.link2}
            </a>
            <a href="#Pricing" className="navbar-link2 link">
              {props.link3}
            </a>
            <a href="#Contact" className="navbar-link3 link">
              {props.link4}
            </a>
            <a href="#Demo" className="navbar-link4 link">
              {props.link5}
            </a>
            <a href="#FAQ" className="navbar-link5 link">
              {props.link6}
            </a>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <Link to="/" className="navbar-log-in link">
            Log in
          </Link>
          <Link to="/" className="navbar-navlink1">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">Sign up</span>
            </div>
          </Link>
          <img
            id="open-mobile-menu"
            alt={props.pastedImageAlt}
            src={props.pastedImageSrc}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="navbar-links1">
          <Link to="/" className="navbar-navlink2">
            {props.text1}
          </Link>
          <Link to="/" className="navbar-navlink3">
            {props.text11}
          </Link>
          <Link to="/" className="navbar-navlink4">
            {props.text12}
          </Link>
          <Link to="/" className="navbar-navlink5">
            {props.text13}
          </Link>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-navlink6">
              <div className="navbar-btn">
                <span className="navbar-text">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink7">
              <div className="navbar-btn1">
                <span className="navbar-text1">{props.text1311}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="navbar-container1">
          <Script
            html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  link3: 'Prices',
  text1: 'Features',
  text12: 'Prices',
  link4: 'Contact',
  brandingSrc: '/receipt%20koala-4%20final-200h.png',
  link1: 'Features',
  text131: 'Log in',
  imageAlt: 'image',
  pastedImageSrc: '/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Contact',
  link2: 'How it works',
  pastedImageAlt: 'pastedImage',
  imageSrc: '/receipt%20koala-4%20final-200h.png',
  brandingAlt: 'pastedImage',
  text11: 'How it works',
  rootClassName: '',
  link5: 'Demo',
  link6: 'FAQ',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  link4: PropTypes.string,
  brandingSrc: PropTypes.string,
  link1: PropTypes.string,
  text131: PropTypes.string,
  imageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  link2: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  brandingAlt: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
}

export default Navbar
