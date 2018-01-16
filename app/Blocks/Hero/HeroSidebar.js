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
        {this.props.children}
      </div>
    )
  }
}

export default HeroSidebar
