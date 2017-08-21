// @flow
import React, { Component } from 'react'
import OtherAriclesSidebar from './OtherAriclesSidebar.js'
import './OtherAricles.style.scss'

class OtherAricles extends Component {

  anchor = (event: Event) => {
    if (this.props.canEdit) {
      event.preventDefault()
    }
  }

  handleBackgroundColor = (color: {hex: string}) => {
    this.props.update({backgroundColor: color.hex})
    this.handleSidebarElement()
  }

  renderSidebar () {
    const { backgroundColor } = this.props.data
    return (
      <OtherAriclesSidebar
        backgroundColor={backgroundColor}
        onChangeComplete={this.handleBackgroundColor}
      />
    )
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  render () {
    const { backgroundColor } = this.props.data
    return (
      <section className="OtherAricles" style={{backgroundColor}}>
        <div
          className="container"
          onClick={() => this.handleSidebarElement()}
        >
          <div className="row">
            <a className="col-lg-6" onClick={this.anchor}>
              <img src="http://via.placeholder.com/725x450" />
            </a>
            <a className="col-lg-6" onClick={this.anchor}>
              <img src="http://via.placeholder.com/725x450" />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default OtherAricles
