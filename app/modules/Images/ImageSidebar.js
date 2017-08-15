// @flow
import React from 'react'
import { OneSvg, TwoSvg } from './assets'

class ImageSidebar extends React.Component {
  render () {
    const { updateCount } = this.props
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">Image Block</span>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Image Type</span>
          <ul className="ImageSidebar-list">
            <li>
              <button onClick={() => updateCount(1)}>
                <OneSvg />
              </button>
            </li>
            <li>
              <button onClick={() => updateCount(2)}>
                <TwoSvg />
              </button>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default ImageSidebar
