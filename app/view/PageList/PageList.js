// @flow
import React, { Component } from 'react'
import Footer from '~/page/modules/Footer'
import PageCard from '~/page/PageCard'


class PageList extends Component {

  render() {
    const card = []
    for (let i = 0; i < 6; i++) {
      card.push(<PageCard key={i}/>)
    }
    return (
      <section>
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
