// @flow
import React, { PureComponent } from 'react'
import { EditorState } from 'draft-js'
import Editor, { compsiteDecorator, EditorSidebar } from '~/Editor'
import MetaList from '~/page/modules/components/MetaList'
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
      editorState: EditorState.createEmpty(compsiteDecorator),
      editor: false,
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        meta: null
      }
    }
    this.handleBackgroundColor = this.handleBackgroundColor.bind(this)
    this.onChange = (editorState) => this.setState({editorState, editor: true})
  }

  componentDidUpdate () {
    const options = {editor: this.state.editor}
    this.handleSidebarElement(options)
  }

  update = (meta: Array<MetaType>) => {
    this.setState({
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        meta: null
      }
    }, () => this.props.update({ ...this.props.data, meta }))
  }

  handleSidebarElement (options = {}) {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar(options))
    }
  }

  handleBackgroundColor (color) {
    this.props.update({meta: this.props.data.meta, backgroundColor: color.hex})
  }

  renderSidebar (options) {
    const { backgroundColor, meta } = this.props.data
    const { editorState } = this.state
    return (
      <ProjectInfoSidebar
        backgroundColor={backgroundColor}
        onChangeComplete={this.handleBackgroundColor}
        meta={meta}
        updateMeta={this.updateMeta}
        >
        {options.editor &&
          <EditorSidebar
            editorState={editorState}
            onChange={this.onChange}
          />
        }
      </ProjectInfoSidebar>
    )
  }

  render () {
    const { editorState } = this.state
    const { backgroundColor = '#000000', meta } = this.props.data
    return (
      <section className="ProjectInfo container" onClick={() => this.handleSidebarElement({editor: false})} style={{backgroundColor, color: TEXTCOLOR[backgroundColor]}}>
        <div className="row ProjectInfo-row">
          <div className="col-lg-6">
            <MetaList meta={meta} update={this.update}/>
          </div>
          <div className="col-lg-6">
            <Editor
              readOnly={!this.props.canEdit}
              editorState={editorState}
              onChange={this.onChange}
              textColour={TEXTCOLOR[backgroundColor]}
              />
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectInfo
