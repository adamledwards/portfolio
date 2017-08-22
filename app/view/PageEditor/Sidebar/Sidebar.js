import React, { Component } from 'react'
import './Sidebar.style.scss'

class Sidebar extends Component {
  render () {
    const { sidebar } = this.props
    return (
      <section className="PageEditor-Sidebar">
        {sidebar && sidebar.sidebarElement ||
        <div>
          <span className="PageEditor-Sidebar-heading">New Page</span>
          <section className="PageEditor-Sidebar-section">
            <span className="PageEditor-Sidebar-subHeading">Published</span>
            <ul>
              <li>
                <strong>Published</strong>
              </li>
              <li>
                <strong>Save</strong>
              </li>
              <li>
                <strong>Save as version</strong>
              </li>
              <li>
                <strong>Open version</strong>
              </li>
              <li>
                <strong>Delete page</strong>
              </li>
              <li>
                <strong>Exit edit mode</strong>
              </li>
            </ul>
          </section>
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
