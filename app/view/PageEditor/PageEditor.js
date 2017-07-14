// @flow
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import type { blockState } from '~/editor/store/blocks'
import './PageEditor.style.scss'
import { blockRendererFn } from '~/editor/components/BlockRenderer'
import ProjectInfo from '~/modules/ProjectInfo'

type Props = {
  addBlock: (block: string, data?: Object) => void,
  changeBlock: (index: number, block: string, data?: Object) => void,
  blocks: blockState
}

class PageEditor extends Component<void, Props, void> {
  updateFn (index: number, block: string) {
    const { changeBlock } = this.props
    return (data: Object) => {
      changeBlock(index, block, data)
    }
  }

  renderBlocks () {
    const { blocks } = this.props
    return blocks.map(({block, data}, i) => {
      const Block = blockRendererFn(block)
      return <Block key={block + i} {...data} canEdit update={this.updateFn(i, block) }/>
    })
  }

  render () {
    const { addBlock } = this.props
    return (
      <section className="PageEditor">
        <Sidebar />
        <section className="PageEditor-container">
          <button onClick={() => addBlock('Hero')}>Hero</button>
          <button onClick={() => addBlock('ProjectInfo')}>Project Info</button>
          {this.renderBlocks()}
        </section>
      </section>
    )
  }
}

export default PageEditor
