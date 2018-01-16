// @flow
import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Editor from '~/Editor'
import TextSidebar from './TextSidebar.js'
import { TEXTCOLOR } from './constants.js'
import './Text.style.scss'

class Text extends Component {

  constructor (props: Props) {
    super(props)
    this.state = {
      editorSidebar: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleSidebarElement()
  }

  update = (nextData: {colour: string, editor: Object}) => {
    this.props.update(nextData)
  }

  renderSidebar (options) {
    const { block } = this.props
    const backgroundColor = block.colour || '#000000'
    return (
      <TextSidebar
        backgroundColor={backgroundColor}
        update={this.update}
      >
        { this.state.editorSidebar }
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
    const { block, canEdit } = this.props
    const backgroundColor = block.colour || '#EFEFEF'
    return (
      <section className="Text container" onClick={canEdit ? () => this.handleSidebarElement({editor: false}) : void (0)}>
        <div className="row Text-row" style={{backgroundColor}}>
          <div className="col-lg-6">
            <Editor
              block={block}
              readOnly={!canEdit}
              update={this.update}
              textColour={TEXTCOLOR[backgroundColor]}
              sidebarUpdate={(sidebar) => this.setState({editorSidebar: sidebar}) }
            />
          </div>
        </div>
      </section>
    )
  }

}

export default createFragmentContainer(
  Text,
  {
    block: graphql`
      fragment Text_block on Block {
        colour
        ...Editor_block
      }
    `,
  }
);
