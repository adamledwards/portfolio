// @flow
import React, { PureComponent } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Editor from '~/Editor'
import MetaList, { MetaSortable } from '~/Blocks/components/MetaList'
import ProjectInfoSidebar from './ProjectInfoSidebar.js'
import { TEXTCOLOR } from './constants.js'
import './ProjectInfo.style.scss'
import 'draft-js/dist/Draft.css'

type MetaType = {
  heading: string,
  text: string
}

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

class ProjectInfo extends PureComponent {
  props: Props
  state: State
  handleMetaChange: () => void
  addMeta: () => void
  handleMetaRemove: () => void
  onChange: () => void
  static defaultProps = {
    data: {
      meta: []
    },
    canEdit: false
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      editorSidebar: null
    }
  }

  componentDidUpdate () {
    this.handleSidebarElement()
  }

  update = (nextData: {colour: string, editor: Object}) => {
    this.props.update(nextData)
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  renderSidebar () {
    const { block } = this.props
    const backgroundColor = block.colour || '#000000'
    return (
      <ProjectInfoSidebar
        backgroundColor={backgroundColor}
        update={this.update}
        >
        { this.state.editorSidebar }
        <MetaSortable block={this.props.block} />
      </ProjectInfoSidebar>
    )
  }

  render () {
    const { block, canEdit } = this.props
    const backgroundColor = block.colour || '#000000'
    return (
      <section className="ProjectInfo container" 
        onClick={canEdit ? () => this.handleSidebarElement({editor: false}) : void (0)}
        style={{backgroundColor, color: TEXTCOLOR[backgroundColor]}}
      >
        <div className="row ProjectInfo-row">
          <div className="col-lg-6">
            <MetaList block={block} canEdit={canEdit} />
          </div>
          <div className="col-lg-6">
            <Editor
              block={block}
              readOnly={!this.props.canEdit}
              update={this.update}
              textColour={TEXTCOLOR[backgroundColor]}
              sidebarUpdate={(sidebar) => this.setState({editorSidebar: sidebar}) }
            />
          </div>
        </div>
      </section>
    )
  }
}

export default createFragmentContainer(
  ProjectInfo,
  {
    block: graphql`
      fragment ProjectInfo_block on Block {
        colour
        ...MetaList_block
        ...MetaSortable_block
        ...Editor_block
      }
    `,
  }
);
