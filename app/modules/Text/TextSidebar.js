// @flow
import React from 'react'
import { TwitterPicker } from 'react-color'
import { COLOURS } from './constants.js'

class TextSidebar extends React.Component {
  render () {
    const { backgroundColor, onChangeComplete } = this.props
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">Text Block</span>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Background Colour</span>
          <TwitterPicker colors={COLOURS} color={backgroundColor} onChangeComplete={onChangeComplete} width="182" triangle="hide"/>
        </section>
        {this.props.children}
      </div>
    )
  }
}

export default TextSidebar
