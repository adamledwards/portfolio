import React from 'react'

const OneImage = ({src, alt}) => (
  <div className="Image container">
    <div className="row">
      <div className="col-lg-12">
        <img src="http://via.placeholder.com/1475x850" alt={alt} />
      </div>
    </div>
  </div>
)

export default OneImage
