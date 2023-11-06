import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card31.css'

const GalleryCard31 = (props) => {
  return (
    <div className={`gallery-card31-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card31-image"
      />
      <div className="gallery-card31-container">
        <h1 className="gallery-card31-text">{props.title}</h1>
        <span className="gallery-card31-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard31.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
}

GalleryCard31.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard31
