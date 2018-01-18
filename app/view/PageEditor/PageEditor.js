// @flow
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './PageEditor.style.scss'
import { BlockSortable, blockRendererFn } from '~/Blocks/utils/blockRenderer'
import Footer from '~/Blocks/Footer'
import OtherAricles from '~/Blocks/OtherArticles'
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
          ...Sidebar_page
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

  constructor (props) {
    super(props)
    this.state = {
      sorting: false,
      sidebarElement: null,
      pageTitle: '',
      client: '',
      month: '',
      year: '',
      day: '',
      showBlockOptions: false
    }
  }

  addBlock (type: string) {
    createBlock({blockType: type, pageId: this.props.page.id})
    this.setState({showBlockOptions: false})
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
    this.setState({sorting: false})
    updatePosition(block.id, newIndex, this.props.page.id)
  }

  onSortStart = ({oldIndex, newIndex}) => {
    this.setState({sorting: true})
  }

  setSideBar = (sidebarElement: React$Element<*>, blockId: string, title: string) => {
    this.setState({sidebar: {sidebarElement, blockId, title}})
  }

  getBlock () {
    const blocks = this.props.page.blockConnection.edges
    return [...blocks].filter((block) => {
      return block.node
    }).sort((blockA, blockB) => { 
      if (!blockA.node || !blockB.node) {
        return 0
      }
      return blockA.node.position - blockB.node.position
    })
  }

  renderBlocks (blocks) {
    return <BlockSortable
      pressDelay={500}
      blocks={this.getBlock()}
      setSideBar={this.setSideBar}
      updateFn={this.updateFn}
      handleRemove={this.handleRemove}
      onSortStart={this.onSortStart}
      onSortEnd={this.onSortEnd}
      helperClass="is-sorting"
    />
  }

  renderButton () {
    return (
      <div className="PageEditor-options-wrapper">
        <button className="PageEditor-options-btn" onClick={() => this.addBlock('Hero')}>Hero</button>
        <button className="PageEditor-options-btn" onClick={() => this.addBlock('ProjectInfo')}>Project Info</button>
        <button className="PageEditor-options-btn" onClick={() => this.addBlock('Text')}>Text</button>
        <button className="PageEditor-options-btn" onClick={() => this.addBlock('Images-1')}>Images</button>
        <button className="PageEditor-options-btn" onClick={() => this.addBlock('Credits')}>Credits</button>
      </div>
    )
  }
  renderEmptyPage () {
    return (
      <section className="PageEditor-container PageEditor-empty">
        <div>
          <span className="PageEditor-empty-header">Blank canvas<br/>Add your first block!</span>
        </div>
        <div className="PageEditor-options show-block no-blocks">
          {this.renderButton()}
        </div>
      </section>
    )
  }

  renderBlockPage () {
    const { showBlockOptions } = this.state
    return (
      <section className="PageEditor-container">
        {this.renderBlocks()}
        <div className={`PageEditor-options${showBlockOptions ? ' show-block' : ''}`}>
          <button
            className="PageEditor-options-toggle"
            onClick={() => this.setState({showBlockOptions: !showBlockOptions})}
          >
            <i className={`fa fa-${showBlockOptions ? 'minus' : 'plus'}`} />
          </button>
          {this.renderButton()}
        </div>
        <OtherAricles page={this.props.page}/>
        <Footer />
      </section>
    )
  }

  render () {
    const { sidebar, sorting } = this.state
    return (
      <section className={`PageEditor${sorting ? ' sorting' : ''}`}>
        <Sidebar sidebar={sidebar} clearSidebar={() => this.setState({sidebar: null})} handleRemove={this.handleRemove} page={this.props.page}/>
        {this.getBlock().length ? this.renderBlockPage() : this.renderEmptyPage()}
      </section>
    )
  }
}

export const PageEditorNew = (props) => (
  <PageEditor {...props} isNew={true} />
)

export default PageEditor
