// @flow
import React, { Component } from 'react'
import { addLink } from './Link.js'
import Modal from '~/Editor/toolbar/Modal'

class LinkPrompt extends Component {
  constructor (props) {
    super(props)
    const { editorState } = this.props
    this.state = {
      ...this.getText()
    }
    this.onUrlChange = (event) => this.setState({url: event.target.value})
    this.onTextChange = (event) => this.setState({selectionText: event.target.value})
    this.handleAddLink = this.handleAddLink.bind(this)
  }

  getText () {
    const { editorState } = this.props
    let url = ''
    const selectionState = editorState.getSelection()
    const start = selectionState.getStartOffset()
    const end = selectionState.getEndOffset()
    const anchorKey = selectionState.getAnchorKey()
    const contentState = editorState.getCurrentContent()
    const contentBlock = contentState.getBlockForKey(anchorKey)
    const entityKey = contentBlock.getEntityAt(start)
    if (entityKey !== null) {
      const entity = contentState.getEntity(entityKey)
      const { href } = entity.getData()
      url = href
    }
    return {
      contentBlockText: contentBlock.getText(),
      selectionText: contentBlock.getText().slice(start, end),
      start,
      end,
      url
    }
  }

  handleAddLink () {
    const { editorState } = this.props
    const nextEditorState = addLink(editorState, this.state.url, this.state.selectionText)
    this.props.onChange(nextEditorState, true)
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal>
        <div className="row">
          <h3>Edit Link</h3>
        </div>
        <div className="row">
          <span>Web Address</span>
          <input type="text" value={this.state.url} onChange={this.onUrlChange} />
        </div>
        <div className="row">
          <span>Text to display</span>
          <input value={this.state.selectionText} onChange={this.onTextChange} type="text" />
        </div>
        <div className="row">
          <button onClick={this.handleAddLink}>OK</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </Modal>
    )
  }

}

export default LinkPrompt
