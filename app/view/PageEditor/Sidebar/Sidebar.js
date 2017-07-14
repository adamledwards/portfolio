import React, { Component } from 'react'
import './Sidebar.style.scss'

class Sidebar extends Component {
  render () {
    return (
      <section className="PageEditor-Sidebar">
        <div>
          <span className="PageEditor-Sidebar-heading">Pages</span>
          <ul className="PageEditor-Sidebar-list">
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Page 4</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Sidebar
