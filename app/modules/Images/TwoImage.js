import React from 'react'

const TwoImage = ({src, alt}) => (
  <div className="Image Image--two container">
    <div className="row">
      <div className="col-lg-6">
        <img className="Image-left" src="http://via.placeholder.com/725x850" alt={alt} />
      </div>
      <div className="col-lg-6">
        <img className="Image-right" src="http://via.placeholder.com/725x850" alt={alt} />
      </div>
    </div>
  </div>
)

export default TwoImage
