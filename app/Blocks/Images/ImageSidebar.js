// @flow
import React from 'react'
import { OneSvg, TwoSvg } from './assets'

class ImageSidebar extends React.Component {
  render () {
    const { update } = this.props
    return (
      <div>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Image Type</span>
          <ul className="ImageSidebar-list">
            <li>
              <button onClick={() => update({blockType: 'Images-1'})}>
                <OneSvg />
              </button>
            </li>
            <li>
              <button onClick={() => update({blockType: 'Images-2'})}>
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
