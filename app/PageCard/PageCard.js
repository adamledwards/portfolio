// @flow
import React, { Component } from 'react'
import { Link } from '~/utils/history.js'
import './PageCard.style.scss'

class PageCard extends Component {

  render() {
    return (
      <Link className="col-lg-4 PageCard-link" href="">
        <div className="PageCard">
          <img className="PageCard-image" src="http://via.placeholder.com/500x770" />
          <div className="PageCard-heading">
            <span className="PageCard-heading-item">Heading 1</span>
            <span className="PageCard-heading-item">Heading 2</span>
          </div>
        </div>
      </Link>
    );
  }

}

export default PageCard
