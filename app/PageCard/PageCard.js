// @flow
import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { Link } from '~/utils/history.js'
import './PageCard.style.scss'


class PageCard extends Component {

  render() {

    const { page } = this.props
    return (
      <Link className="col-lg-4 PageCard-link" route="pageWithID" params={{id: page.id}}>
        <div className="PageCard">
          <div className="PageCard-image">
            <img src={page.listingImage.fullPath} />
            <div className="PageCard-hover">
              <span className="PageCard-hover-heading">{page.title}</span>
            </div>
          </div>
          <div className="PageCard-heading">
            <span className="PageCard-heading-item">Heading 1</span>
            <span className="PageCard-heading-item">Heading 2</span>
          </div>
        </div>
      </Link>
    );
  }
}




export default createFragmentContainer(PageCard, {
  page: graphql`
    fragment PageCard_page on Page {
      id
      title,
      listingImage {
        id
        fullPath
      }
    }
  `
})
