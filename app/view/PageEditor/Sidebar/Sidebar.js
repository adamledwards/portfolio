import React, { Component } from 'react'
import './Sidebar.style.scss'

class Sidebar extends Component {
  render () {
    const { sidebar } = this.props
    return (
      <section className="PageEditor-Sidebar">
        {sidebar && sidebar.sidebarElement ||
        <div>
          <span className="PageEditor-Sidebar-heading">Pages</span>
          <ul className="PageEditor-Sidebar-list">
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Page 4</li>
          </ul>
        </div>
        }
        {
          (sidebar && sidebar.removeBlock) &&
          <button onClick={sidebar.removeBlock}>Remove</button>
        }
      </section>
    )
  }
}

export default Sidebar
