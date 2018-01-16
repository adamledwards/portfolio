// @flow
import React, { Component } from 'react'
import { blockRenderMap } from '~/Blocks/utils/blockRenderer'
import Footer from '~/Blocks/Footer'
import OtherAricles from '~/Blocks/OtherArticles'
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
          ...OtherArticles_page
          blockConnection(first: 10) @connection(key: "PageEditor_blockConnection") {
            edges {
              node {
                id
                blockType
                position
                ...Hero_block
                ...ProjectInfo_block
                ...Credits_block
                ...Text_block
                ...Images_block
                ...ImageUploader_block
              }
            }
          }
        }
      }
    }
  `
  renderBlocks () {
    const blocks = this.props.page.blockConnection.edges
    const validBlocks = blocks.filter(({ node }) => node && typeof blockRenderMap(node.blockType) === 'function')
    return validBlocks.map(({ node }, i) => {
      const Block = blockRenderMap(node.blockType)
      return (
        <Block
          key={node.id}
          canEdit={false}
          block={node}
        />
      )
    })
  }

  render () {
    return (
      <section className="Page">
        <section className="Page-container">
          {this.renderBlocks()}
          <OtherAricles page={this.props.page} />
          <Footer />
        </section>
      </section>
    )
  }
}

export default Page
