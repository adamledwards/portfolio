// @flow
import React from 'react'
import { TwitterPicker } from 'react-color'

export const COLOURS = ['#EFEFEF', '#FFF', '#000']

class OtherAriclesSidebar extends React.Component {
  render () {
    const { backgroundColor, onChangeComplete } = this.props
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">More Articles Block</span>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Background Colour</span>
          <TwitterPicker colors={COLOURS} color={backgroundColor} onChangeComplete={onChangeComplete} width="182" triangle="hide"/>
        </section>
      </div>
    )
  }
}

export default OtherAriclesSidebar
