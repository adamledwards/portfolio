// @flow
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import type { blockState } from '~/editor/store/blocks'
import './PageEditor.style.scss'
import { blockRendererFn } from '~/editor/components/BlockRenderer'
import Footer from '~/modules/Footer'

type Props = {
  addBlock: (block: string, data?: Object) => void,
  changeBlock: (index: number, block: string, data?: Object) => void,
  blocks: blockState
}

class PageEditor extends Component {
  props: Props

  constructor(props) {
    super(props)
    this.state = {
      sidebarElement: null
    }
  }
  updateFn (index: number, block: string) {
    const { changeBlock } = this.props
    return (data: Object) => {
      changeBlock(index, block, data)
    }
  }

  setSideBar (sidebarElement: React$Element<*>) {
    this.setState({sidebarElement})
  }

  renderBlocks () {
    const { blocks } = this.props
    return blocks.map(({block, data}, i) => {
      const Block = blockRendererFn(block)
      return (
        <Block
          key={block + i}
          data={data}
          canEdit
          setSidebar={(sidebarElement) => this.setSideBar(sidebarElement)}
          update={this.updateFn(i, block) }
        />
      )
    })
  }

  render () {
    const { addBlock } = this.props
    const { sidebarElement } = this.state
    return (
      <section className="PageEditor">
        <Sidebar sidebarElement={sidebarElement}/>
        <section className="PageEditor-container">
          <button onClick={() => addBlock('Hero')}>Hero</button>
          <button onClick={() => addBlock('ProjectInfo')}>Project Info</button>
          <button onClick={() => addBlock('Text')}>Text</button>
          <button onClick={() => addBlock('Credits')}>Credits</button>
          <button onClick={() => addBlock('OtherArticles')}>More Articles</button>
          <button onClick={() => addBlock('Images')}>Images</button>
          {this.renderBlocks()}
          <Footer />
        </section>
      </section>
    )
  }
}

export default PageEditor
