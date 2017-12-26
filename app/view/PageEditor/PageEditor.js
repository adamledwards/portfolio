// @flow
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './PageEditor.style.scss'
import { BlockSortable, blockRendererFn } from '~/Blocks/utils/blockRenderer'
import Footer from '~/Blocks/Footer'
import { graphql } from 'react-relay'
import type { PageEditorQueryResponse } from './__generated__/PageEditorQuery.graphql.js'
import { createBlock, removeBlock, updateBlock, updatePosition } from '~/utils/mutation'

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

  constructor (props) {
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

  onSortEnd = ({oldIndex, newIndex}) => {
    const blocks = this.getBlock()
    const block = blocks[oldIndex].node
    updatePosition(block.id, newIndex, this.props.page.id)
  }

  setSideBar = (sidebarElement: React$Element<*>, blockId: string) => {
    this.setState({sidebar: {sidebarElement, blockId}})
  }

  getBlock() {
    const blocks = this.props.page.blockConnection.edges
    return [...blocks].sort((blockA, blockB) => { 
      if (!blockA.node || !blockB.node) {
        return 0
      }
      return blockA.node.position - blockB.node.position
    })
  }

  renderBlocks () {
    return <BlockSortable
      pressDelay={500}
      blocks={this.getBlock()}
      setSideBar={this.setSideBar}
      updateFn={this.updateFn}
      handleRemove={this.handleRemove}
      onSortEnd={this.onSortEnd}
      helperClass="is-sorting"
    />
  }

  render () {
    const { sidebar } = this.state
    return (
      <section className="PageEditor">
        <Sidebar sidebar={sidebar} handleRemove={this.handleRemove}/>
        <section className="PageEditor-container">
          <button onClick={() => this.addBlock('Hero')}>Hero</button>
          <button onClick={() => this.addBlock('ProjectInfo')}>Project Info</button>
          <button onClick={() => this.addBlock('Text')}>Text</button>
          <button onClick={() => this.addBlock('Credits')}>Credits</button>
          <button onClick={() => this.addBlock('OtherArticles')}>More Articles</button>
          <button onClick={() => this.addBlock('Images-1')}>Images</button>
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
