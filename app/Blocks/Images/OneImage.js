import React from 'react'
import ImageUploaderWrapper from '~/Blocks/components/ImageUploader'

const OneImage = ({ block, images }) => {
  let image
  if (images.length) {
    const sortedImages = images.sort((imgA, imgB) => {
      if (imgA.node.scope < imgB.node.scope) {
        return -1
      } else if (imgA.node.scope > imgB.node.scope) {
        return 1
      }
      return 0
    })
    image = sortedImages[0]
  }
  return (
    <ImageUploaderWrapper block={block} scope="image1">
      <div className="Image container">
        <div className="row">
          <div className="col-lg-12">
            {
              image ? <img src={image.node.fullPath} />
              : <div className="Image-placeholder">Drop Image here</div>
            }
          </div>
        </div>
      </div>
    </ImageUploaderWrapper>
  )
}

export default OneImage
