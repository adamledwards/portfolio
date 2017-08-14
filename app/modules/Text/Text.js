// @flow
import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor, { compsiteDecorator, EditorSidebar } from '~/Editor'
import TextSidebar from './TextSidebar.js'
import { TEXTCOLOR } from './constants.js'
import './Text.style.scss'

class Text extends Component {
  constructor(props) {
    super(props)
    this.handleSidebarElement = this.handleSidebarElement.bind(this)
    this.handleBackgroundColor = this.handleBackgroundColor.bind(this)
    this.onChange = (editorState) => this.setState({editorState}, () => this.handleSidebarElement({editor: true}))
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  static defaultProps = {
    backgroundColor: '#EFEFEF'
  }

  handleBackgroundColor (color) {
    this.props.update({backgroundColor: color.hex})
    this.handleSidebarElement()
  }

  renderSidebar (options) {
    const { backgroundColor } = this.props.data
    const { editorState } = this.state
    return (
      <TextSidebar
        backgroundColor={backgroundColor}
        onChangeComplete={this.handleBackgroundColor}
        >
        {
          options.editor &&
          <EditorSidebar
            editorState={editorState}
            onChange={this.onChange}
          />
      }
      </TextSidebar>
    )
  }

  handleSidebarElement (options = {}) {
    if (this.props.canEdit) {
      this.options = {...this.options, ...options}
      this.props.setSidebar(this.renderSidebar(this.options))
    }
  }

  render () {
    const { backgroundColor } = this.props.data
    const { editorState } = this.state
    return (
      <section className="Text container" onClick={() => this.handleSidebarElement({editor: false})}>
        <div className="row Text-row" style={{backgroundColor}}>
          <div className="col-lg-6">
            <Editor
              readOnly={!this.props.canEdit}
              editorState={editorState}
              onChange={this.onChange}
              textColour={TEXTCOLOR[backgroundColor]}
              />
          </div>
        </div>
      </section>
    )
  }

}

export default Text
