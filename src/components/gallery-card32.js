import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card32.css'

const GalleryCard32 = (props) => {
  return (
    <div className={`gallery-card32-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card32-image"
      />
      <div className="gallery-card32-container">
        <h1 className="gallery-card32-text">{props.title}</h1>
        <span className="gallery-card32-text1">{props.subtitle}</span>
      </div>
    </div>
  )
}

GalleryCard32.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
  rootClassName: '',
  title: 'Project Title',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

GalleryCard32.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard32
