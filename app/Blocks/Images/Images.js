// @flow
import React, { Component } from 'react'
import OneImage from './OneImage.js'
import TwoImage from './TwoImage.js'
import type { DisplayProps } from './types.js'
import ImageSidebar from './ImageSidebar.js'

class Images extends Component {
  props: DisplayProps

  update = (nextData: {imageCount: number}) => {
    const data = this.props.data
    const {
      imageCount = data.imageCount
    } = nextData
    this.props.update({imageCount})
  }

  renderSidebar () {
    return (
      <ImageSidebar
        update={this.update}
      />
    )
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  renderOneImage () {
    return <OneImage />
  }

  renderTwoImage () {
    return <TwoImage />
  }

  render () {
    const { image1, image2, imageCount = 1 } = this.props.data
    let ImageComponent
    if (imageCount === 1) {
      ImageComponent = this.renderOneImage(image1)
    } else if (imageCount === 2) {
      ImageComponent = this.renderTwoImage(image1, image2)
    }
    return (
      <section onClick={() => this.handleSidebarElement()}>
        {ImageComponent}
      </section>
    )
  }
}

export default Images
