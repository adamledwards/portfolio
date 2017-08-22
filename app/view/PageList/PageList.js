// @flow
import React, { Component } from 'react'
import Footer from '~/page/modules/Footer'
import PageCard from '~/page/PageCard'
import './PageList.style.scss'


class PageList extends Component {

  render() {
    const card = []
    for (let i = 0; i < 6; i++) {
      card.push(<PageCard key={i}/>)
    }
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
