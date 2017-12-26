// @flow
import React, { Component } from 'react'
import { blockRendererFn } from '~/Blocks/utils/blockRenderer'
import Footer from '~/Blocks/Footer'
import { graphql } from 'react-relay'

import './Page.style.scss'

type Props = {
  blocks: blockState,
}

class Page extends Component {
  props: Props

  static query = graphql`
    query PageQuery ($id: ID!) {
      page: node(id: $id) {
        ... on Page {
          id
          title
          client
          description
          projectGoLive
          position
          published
          blockConnection(first: 10) @connection(key: "Page_blockConnection") {
            edges {
              block: node {
                id
                title
                blockType
                editor
                date
              }
            }
          }
        }
      }
    }
  `
  renderBlocks () {
    const blocks = this.props.page.blocks.edges
    const validBlocks = blocks.filter(({ block }) => block && typeof blockRendererFn(block.blockType) === 'function')
    return validBlocks.map(({ block }, i) => {
      const Block = blockRendererFn(block.blockType)
      return (
        <Block
          key={block.id + i}
          data={block}
          canEdit={false}
        />
      )
    })
  }

  render () {
    return (
      <section className="Page">
        <section className="Page-container">
          {this.renderBlocks()}
          <Footer />
        </section>
      </section>
    )
  }
}

export default Page
