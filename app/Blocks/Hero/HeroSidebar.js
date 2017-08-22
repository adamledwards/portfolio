// @flow
import React from 'react'

export const HeroSidebarInput = ({name, children}) => (
  <section className="PageEditor-Sidebar-section">
    <span className="PageEditor-Sidebar-subHeading">{name}</span>
    {children}
  </section>
)

class HeroSidebar extends React.Component {
  render () {
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">Hero</span>
        {this.props.children}
      </div>
    )
  }
}

export default HeroSidebar
