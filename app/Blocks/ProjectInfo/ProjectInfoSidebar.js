import React from 'react'
import { TwitterPicker } from 'react-color'
import { COLOURS } from './constants.js'

class ProjectInfoSidebar extends React.Component {
  render () {
    const { backgroundColor, update } = this.props
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">Project Info</span>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Background Colour</span>
          <TwitterPicker colors={COLOURS} color={backgroundColor} onChangeComplete={({hex}) => update({colour: hex})} width="182" triangle="hide"/>
        </section>
        {this.props.children}
      </div>
    )
  }
}


export default ProjectInfoSidebar
