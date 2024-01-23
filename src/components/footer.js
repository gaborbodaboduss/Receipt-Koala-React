import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'
import './footer.css'

const Footer = (props) => {
  return (
    <div id="Contact" className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <img
              alt={props.pastedImageAlt}
              src={props.pastedImageSrc}
              className="footer-pasted-image"
            />
            <span className="footer-text">{props.text1}</span>
          </div>
          <div className="footer-socials">
            <Social
              rootClassName="social-root-class-name"
              className=""
            ></Social>
            <Social
              insiderSrc="/pastedimage-k0l6.svg"
              rootClassName="social-root-class-name1"
              className=""
            ></Social>
            <Social
              insiderSrc="/pastedimage-ld65.svg"
              rootClassName="social-root-class-name2"
              className=""
            ></Social>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-header">{props.header}</span>
            <span className="footer-link">{props.link}</span>
            <span className="footer-link01">{props.link1}</span>
            <span className="footer-link02">{props.link2}</span>
            <span className="footer-link03">{props.link3}</span>
            <span className="footer-link04">{props.link4}</span>
          </div>
          <div className="footer-column1">
            <span className="footer-header1">{props.header1}</span>
            <span className="footer-link05">{props.link5}</span>
            <span className="footer-link06">{props.link6}</span>
            <span className="footer-link07">{props.link7}</span>
            <span className="footer-link08">{props.link8}</span>
            <span className="footer-link09">{props.link9}</span>
            <span className="footer-link10">{props.link10}</span>
          </div>
        </div>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  link9: 'Careers',
  link1: 'For individuals',
  link: 'Receipt Digitalisation',
  link8: 'Partners',
  link3: 'Plans for everyone',
  link10: 'Press & Media',
  text1: 'Follow us on social media',
  header1: 'Company',
  pastedImageSrc: '/receipt%20koala-4%20final-200h.png',
  pastedImageAlt: 'pastedImage',
  link7: 'News',
  link2: 'For retailers',
  link5: 'About',
  text: '© 2023 Receipt Koala. All Rights Reserved.',
  rootClassName: '',
  header: 'Solutions',
  link6: 'Team',
  link4: 'Eco friendly solutions',
}

Footer.propTypes = {
  link9: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  text1: PropTypes.string,
  header1: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  link7: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
}

export default Footer
