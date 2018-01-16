import React from 'react'
import ImageUploaderWrapper from '~/Blocks/components/ImageUploader'
import { locale } from 'moment';

const TwoImage = ({ block, images: serverImage, canEdit }) => {
  let images = [ null, null ]
  if (serverImage.length) {
    images = serverImage.sort((imgA, imgB) => {
      if (imgA.node.scope < imgB.node.scope) {
        return -1
      } else if (imgA.node.scope > imgB.node.scope) {
        return 1
      }
      return 0
    })
    images = [ images[0], images[1] ]
  }

  return (
    <div className="Image Image--two container">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-lg-6 TwoImage" key={index}>
            <ImageUploaderWrapper block={block} scope={`image${index + 1}`} canEdit={canEdit}>
              {
                image ? <img src={image.node.fullPath} />
                : <div className="Image-placeholder" >Drop Image here</div>
              }
            </ImageUploaderWrapper>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TwoImage
