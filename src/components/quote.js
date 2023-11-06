import React from 'react'

import PropTypes from 'prop-types'

import './quote.css'

const Quote = (props) => {
  return (
    <div className={`quote-quote ${props.rootClassName} `}>
      <div className="quote-quote1">
        <span className="quote-quote2">{props.Quote}</span>
      </div>
      <div className="quote-people">
        <div className="quote-person">
          <img
            alt="person-avatar"
            src={props.Avatar}
            className="quote-avatar"
          />
          <div className="quote-person-details">
            <span className="quote-text">{props.Author}</span>
            <span className="">{props.Title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  Quote:
    '"Receipt Koala has completely changed my shopping routine. With their e-receipts, I no longer have to deal with stacks of paper cluttering my wallet. It\'s not just convenient; it\'s eco-friendly. Plus, the personalized coupons are a nice bonus!"',
  rootClassName: '',
  Title: 'Manager @Vista Social',
  Author: 'Andy Smith',
  Avatar: '/pastedimage-8jmb-200w.png',
}

Quote.propTypes = {
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Author: PropTypes.string,
  Avatar: PropTypes.string,
}

export default Quote
