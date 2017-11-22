// @flow
import React, { PureComponent } from 'react'
import MetaList, { MetaSortable } from '~/Blocks/components/MetaList'
import { createFragmentContainer, graphql } from 'react-relay'
import CreditsSidebar from './CreditsSidebar.js'
import { TEXTCOLOR } from './constants.js'
import './Credits.style.scss'

type DisplayProps = {
  canEdit: boolean,
  meta: Array<MetaType>,
  editor: Object,
  update: () => void
}

type State = {
  meta: MetaType,
  editMode: {
    meta: null | number
  }
}
type Props = DisplayProps

class Credits extends PureComponent {
  props: Props
  state: State
  handleMetaChange: () => void
  addMeta: () => void
  handleMetaRemove: () => void
  onChange: () => void

  componentDidUpdate () {
    this.handleSidebarElement()
  }

  update = (nextData: {colour: string}) => {
    this.props.update(nextData)
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  renderSidebar (options) {
    const { block } = this.props
    const backgroundColor = block.colour || '#000000'
    return (
      <CreditsSidebar
        backgroundColor={backgroundColor}
        update={this.update}
        >
        <MetaSortable block={this.props.block} />
      </CreditsSidebar>
    )
  }

  render () {
    const { block } = this.props
    const backgroundColor = block.colour || '#EFEFEF'
    return (
      <section className="Credits container" onClick={() => this.handleSidebarElement({editor: false})} style={{backgroundColor, color: TEXTCOLOR[backgroundColor.toLowerCase()]}}>
        <div className="row Credits-row">
          <div className="col-lg-6">
            <h3>Credits</h3>
          </div>
          <div className="col-lg-6">
            <MetaList block={block} />
          </div>
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(
  Credits,
  {
    block: graphql`
      fragment Credits_block on Block {
        colour
        ...MetaList_block
        ...MetaSortable_block
      }
    `,
  }
);
