import React from 'react'

import PropTypes from 'prop-types'

import './quote.css'

const Quote = (props) => {
  return (
    <div className={`quote-quote ${props.rootClassName} `}>
      <div className="quote-quote1">
        <span className="quote-quote2">{props.quote}</span>
      </div>
      <div className="quote-people">
        <div className="quote-person">
          <img
            alt="person-avatar"
            src={props.avatar}
            className="quote-avatar"
          />
          <div className="quote-person-details">
            <span className="quote-text">{props.author}</span>
            <span className="">{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  quote:
    '"Receipt Koala has completely changed my shopping routine. With their e-receipts, I no longer have to deal with stacks of paper cluttering my wallet. It\'s not just convenient; it\'s eco-friendly. Plus, the personalized coupons are a nice bonus!"',
  rootClassName: '',
  title: 'Manager @Vista Social',
  author: 'Andy Smith',
  avatar: '/pastedimage-8jmb-200w.png',
}

Quote.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
}

export default Quote
