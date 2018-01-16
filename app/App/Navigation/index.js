import React from 'react'
import { Link } from '~/utils/history.js'
import Logo from '~/assets/logo.svg.js'
import './Navigation.style.scss'

const Navigation = () => (
  <nav className="Navigation">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Logo fill="#fff"/>
        </div>
        <div className="col-lg-6">
          <ul className="Navigation-list row">
            <li>selected work</li>
            <li>profile</li>
            <li>misc</li>
            <li className="align-left">email me</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation
