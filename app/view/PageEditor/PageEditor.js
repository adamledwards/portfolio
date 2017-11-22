// @flow
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import type { blockState } from '~/editor/store/blocks'
import './PageEditor.style.scss'
import { blockRendererFn } from '~/editor/components/BlockRenderer'
import Footer from '~/Blocks/Footer'
import { graphql } from 'react-relay'
import type { PageEditorQueryResponse } from './__generated__/PageEditorQuery.graphql.js'
import { createBlock, removeBlock, updateBlock } from '~/utils/mutation'


type Props = {
  addBlock: (block: string, data?: Object) => void,
  changeBlock: (index: number, block: string, data?: Object) => void,
  removeBlock: (index: number) => void,
  blocks: blockState,
  page: PageEditorQueryResponse
}

class PageEditor extends Component {
  props: Props

  static query = graphql`
    query PageEditorQuery ($id: ID!) {
      page: node(id: $id) {
        ... on Page {
          id
          title
          client
          description
          projectGoLive
          position
          published
          blockConnection(first: 10) @connection(key: "PageEditor_blockConnection") {
            edges {
              block: node {
                id
                blockType
                ...Hero_block
                ...ProjectInfo_block
                ...Credits_block
                ...Text_block
              }
            }
          }
        }
      }
    }
  `

  constructor(props) {
    super(props)
    this.state = {
      sidebarElement: null,
      pageTitle: '',
      client: '',
      month: '',
      year: '',
      day: '',
    }
  }

  addBlock (type: string) {
    createBlock({blockType: type, pageId: this.props.page.id})
  }

  updateFn (ID: string, block: string) {
    return (data: Object) => {
      updateBlock({ID, ...data})
    }
  }

  handleRemove = (id: string) => {
    this.setState({sidebar: null}, () => {
      removeBlock(id)
    })
  }

  setSideBar (sidebarElement: React$Element<*>, blockId: string) {
    this.setState({sidebar: {sidebarElement, blockId}})
  }

  renderBlocks () {
    const blocks = this.props.page.blockConnection.edges
    const validBlocks = blocks.filter(({ block }) => block && typeof blockRendererFn(block.blockType) === 'function')
    return validBlocks.map(({ block }, i) => {
      const Block = blockRendererFn(block.blockType)
      return (
        <Block
          key={block.id + i}
          block={block}
          canEdit
          setSidebar={(sidebarElement) => this.setSideBar(sidebarElement, block.id)}
          update={this.updateFn(block.id) }
          remove={() => this.handleRemove(block.id)}
        />
      )
    })
  }

  render () {
    const { sidebar, removeBlock } = this.state

    return (
      <section className="PageEditor">
        <Sidebar sidebar={sidebar} handleRemove={this.handleRemove}/>
        <section className="PageEditor-container">
          <button onClick={() => this.addBlock('Hero')}>Hero</button>
          <button onClick={() => this.addBlock('ProjectInfo')}>Project Info</button>
          <button onClick={() => this.addBlock('Text')}>Text</button>
          <button onClick={() => this.addBlock('Credits')}>Credits</button>
          <button onClick={() => this.addBlock('OtherArticles')}>More Articles</button>
          <button onClick={() => this.addBlock('Images')}>Images</button>
          {this.renderBlocks()}
          <Footer />
        </section>
      </section>
    )
  }
}

export const PageEditorNew = (props) => (
  <PageEditor {...props} isNew={true} />
)

export default PageEditor
