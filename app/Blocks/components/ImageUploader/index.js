// @flow
import React, { Component } from 'react'
import uploadBlockFile from '~/utils/mutation/UploadBlockFile.js'
import './ImageUploader.style.scss'
import { graphql, createFragmentContainer } from 'react-relay'
type Props = {
  scope: string,

}
class ImageUploader extends Component {
  props: Props

  render() {
    return (
      <div>
        <p>Drag Image or select file to upload</p>
        <input type="file" name="file" />
      </div>
    );
  }
}

class ImageUploaderWrapper extends Component {
  props: Props

  constructor(props) {
    super(props)
    this.state = {
      dragging: false
    }
  }

  onDragStart = (event) => {
    event.preventDefault()
    this.setState({dragging: true})
  }
  onDragEnter = (event) => {
    event.preventDefault()
    this.setState({dragging: true})
  }
  onDragOver = (event) => {
    event.preventDefault()
  }
  onDragLeave = (event) => {
    event.preventDefault()
    this.setState({dragging: false})
  }
  onDrop = (event) => {
    event.preventDefault()
    if (event.dataTransfer.files.length) {
      uploadBlockFile(
        {
          blockId: this.props.block.id,
          scope: this.props.scope
        },
        event.dataTransfer.files
      )
    }
    this.setState({dragging: false})
  }

  renderDragOver () {
    return <div
      onDragOver={this.onDragOver}
      onDragLeave={this.onDragLeave}
      onDrop={this.onDrop}
      className="ImageUploaderWrapper-dragging">
      <p>Drop File</p>
    </div>
  }

  render () {
    const { dragging } = this.state
    return (
      <div
        className="ImageUploaderWrapper"
        onDragStart={this.onDragStart}
        onDragEnter={this.onDragEnter}

      >
        {this.props.children}
        { dragging && this.renderDragOver()}
      </div>
    )
  }
}

export default createFragmentContainer(ImageUploaderWrapper, {
  block: graphql`
    fragment ImageUploader_block on Block {
      id
    }
  `
});
