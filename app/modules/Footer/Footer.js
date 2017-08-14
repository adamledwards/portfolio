import React, { Component } from 'react'
import moment from 'moment'
import './Footer.style.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.time()
    }
  }

  componentDidMount () {
    this.startClock()
  }

  startClock () {
    const date = new Date()
    const milliseconds = (60 - date.getSeconds()) * 1000
    setTimeout(() => {
      this.setState({time: this.time()}, () => this.startClock())
    }, milliseconds)
  }

  time () {
    return moment().utc().format('hh:mm a')
  }

  render () {
    const { time } = this.state

    return (
      <footer className="Footer">
        <div className="container">
          <div className="row Footer-row">
            <div className="col-lg-6 row">
              <div className="Footer-london"><strong>London </strong> {time}</div>
              <div className="Footer-madrid"><strong>Madrid </strong> {time}</div>
            </div>
            <div className="col-lg-6 row Footer-list-row">
              <ul className="Footer-list">
                <li>Béhance</li>
                <li>Dribbble</li>
                <li>Email</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer
