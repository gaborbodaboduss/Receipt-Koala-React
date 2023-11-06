import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div className={`feature-feature ${props.rootClassName} `}>
      <img
        alt={props.Thumbnail_alt}
        src={props.Thumbnail}
        className="feature-image"
      />
      <div className="feature-content">
        <span className="feature-title">{props.Title}</span>
        <span className="feature-description">{props.Description}</span>
      </div>
    </div>
  )
}

Feature.defaultProps = {
  Title: 'ECO-Friendly',
  Thumbnail_alt: 'image',
  Thumbnail: '/vector.svg',
  rootClassName: '',
  Description: 'Ending unnecessary paper use and logging',
}

Feature.propTypes = {
  Title: PropTypes.string,
  Thumbnail_alt: PropTypes.string,
  Thumbnail: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default Feature
