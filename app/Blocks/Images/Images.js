// @flow
import React, { Component } from 'react'
import OneImage from './OneImage.js'
import TwoImage from './TwoImage.js'
import type { DisplayProps } from './types.js'
import { createFragmentContainer, graphql } from 'react-relay'
import ImageSidebar from './ImageSidebar.js'

class Images extends Component {
  props: DisplayProps

  update = ({blockType}) => {
    this.props.update({blockType})
  }

  renderSidebar () {
    return (
      <ImageSidebar
        update={this.update}
      />
    )
  }

  validFileConnection (fileConnection) {
    return !!fileConnection && fileConnection.edges.length
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  renderOneImage (images = []) {
    return <OneImage images={images} block={this.props.block} />
  }

  renderTwoImage (images = []) {
    return <TwoImage images={images} block={this.props.block} />
  }

  render () {
    const { fileConnection, blockType } = this.props.block
    let ImageComponent, images

    if (this.validFileConnection(fileConnection)) {
      images = fileConnection.edges.filter(edge => !!edge.node)
    }

    if (blockType === 'Images-2') {
      ImageComponent = this.renderTwoImage(images)
    } else {
      ImageComponent = this.renderOneImage(images)
    }
    return (
      <section onClick={() => this.handleSidebarElement()}>
        {ImageComponent}
      </section>
    )
  }
}

export default createFragmentContainer(
  Images,
  {
    block: graphql`
      fragment Images_block on Block {
        blockType
        fileConnection (first: 2) @connection(key: "Block_fileConnection") {
          edges {
            node {
              id
              fullPath
              scope
            }
          }
        }
        ...ImageUploader_block
      }
    `,
  }
);
