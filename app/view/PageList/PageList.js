// @flow
import React, { Component } from 'react'
import { graphql } from 'react-relay'
import Footer from '~/Blocks/Footer'
import PageCard from '~/PageCard'
import './PageList.style.scss'


class PageList extends Component {
  static query = graphql`
    query PageListQuery {
      pages{
        edges {
          node {
            ...PageCard_page
          }
        }
      }
    }
  `

  render() {
    console.log(this.props)
    const { pages: { edges } } = this.props
    const card = edges.map(
      (edge) => <PageCard key={edge.node.__id} page={edge.node}/>
    )

    return (
      <section className="PageList">
        <div className="container">
          <div className="row">
            {card}
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}


export default PageList
