import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card1-icon"
      >
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.quote}</span>
        <span className="testimonial-card1-text1">{props.name}</span>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card1-image"
        />
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  name: 'Jane Doe',
  rootClassName: '',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  picture_alt: 'profile',
  quote:
    '"I\'ve been using Receipt Koala for a while now, and it\'s been fantastic. My business has saved a considerable amount on thermal paper costs, and the integration was seamless. The app is user-friendly, and the insights into customer behavior are invaluable for our marketing efforts."',
  role: 'SOFTWARE ENGINEER',
}

TestimonialCard1.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_src: PropTypes.string,
  picture_alt: PropTypes.string,
  quote: PropTypes.string,
  role: PropTypes.string,
}

export default TestimonialCard1
