// @flow
import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { Link } from '~/utils/history.js'
import './OtherAricles.style.scss'

class OtherAricles extends Component {

  renderLink (page) {
    return (
      <Link className="col-lg-6" route="pageWithID" params={{id: page.id}}>
        <div className="OtherAricles-card">
          <img src={page.listingImageSmall.fullPath} />
          <div className="OtherAricles-hover">
            <span>{page.title}</span>
          </div>
        </div>
      </Link>
    )
  }

  render () {
    const { previous, next } = this.props.page
    if (!previous || !next) {
      return null
    }

    return (
      <section className="OtherAricles">
        <div className="container">
          <div className="row">
            { (previous && previous.listingImageSmall) &&
                this.renderLink(previous)

            }
            { (next && next.listingImageSmall) &&
              this.renderLink(next)
            }
          </div>
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(
  OtherAricles,
  {
    page: graphql`
      fragment OtherArticles_page on Page {
        previous:nextPage(direction: BACKWARDS) {
          id
          title
          listingImageSmall {
            id
            fullPath
          }
        }
        next:nextPage(direction: FORWARD) {
          id
          title
          listingImageSmall {
            id
            fullPath
          }
        }
      }
    `,
  }
)
