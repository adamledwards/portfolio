// @flow
import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor, { compsiteDecorator, EditorSidebar } from '~/Editor'
import { Meta, MetaEdit } from './Meta.js'
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

class ProjectInfo extends Component {
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
    this.addMeta = this.addMeta.bind(this)
    this.handleMetaChange = this.handleMetaChange.bind(this)
    this.handleMetaRemove = this.handleMetaRemove.bind(this)
    this.handleBackgroundColor = this.handleBackgroundColor.bind(this)
    this.onChange = (editorState) => this.setState({editorState, editor: true})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState === this.state){
      return nextProps.data !== this.props.data
    }
    return true
  }

  componentDidUpdate () {
    const options = {editor: this.state.editor}
    this.handleSidebarElement(options)
  }

  updateMeta = (meta: Array<MetaType>) => {
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

  addMeta () {
    this.setState({
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        meta: -1
      }
    })
  }

  handleMetaChange (meta: MetaType) {
    this.setState({meta})
  }

  handleMetaClick (index: number, props: MetaType) {
    this.setState({
      meta: {
        ...props
      },
      editMode: {
        meta: index
      }
    })
  }

  handleMetaRemove (index: number) {
    const { meta = [] } = this.props.data
    const newMeta = [
      ...meta.slice(0, index),
      ...meta.slice(index + 1)
    ]
    this.updateMeta(newMeta)
  }

  handleMetaClose (index: number, isNew: boolean) {
    const { meta = [] } = this.props.data
    let newMeta
    if (isNew) {
      newMeta = [
        this.state.meta,
        ...meta
      ]
    } else {
      newMeta = [
        ...meta.slice(0, index),
        this.state.meta,
        ...meta.slice(index + 1)
      ]
    }
    this.updateMeta(newMeta)
  }

  renderMetaRead (index: number, meta: MetaType) {
    return <Meta key={index} {...meta} onClick={() => this.handleMetaClick(index, meta)} />
  }

  renderMetaWrite (index: number, isNew: boolean = false) {
    const { meta } = this.state
    return (
      <MetaEdit
        key={isNew ? -1 : index}
        {...meta}
        onClose={() => this.handleMetaClose(index, isNew)}
        onChange={this.handleMetaChange}
        onRemove={() => this.handleMetaRemove(index)}
      />
    )
  }

  renderMeta (data = this.props.data) {
    const { meta = []} = data
    const { editMode } = this.state
    const { meta: metaEditMode } = editMode
    let newMetaElement

    const metaElements = meta.map((props: MetaType, i) => {
      return metaEditMode === i
      ? this.renderMetaWrite(i)
    : this.renderMetaRead(i, props)
    })

    const isNew = metaEditMode === -1
    if (isNew) {
      newMetaElement = this.renderMetaWrite(0, isNew)
    }
    return [newMetaElement, ...metaElements]
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
    const { backgroundColor, meta = [] } = this.props.data
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
    const { backgroundColor = '#000000' } = this.props.data
    console.log(backgroundColor, TEXTCOLOR[backgroundColor])
    return (
      <section className="ProjectInfo container" onClick={() => this.handleSidebarElement({editor: false})} style={{backgroundColor, color: TEXTCOLOR[backgroundColor]}}>
        <div className="row ProjectInfo-row">
          <div className="col-lg-6">
            <button
              className="ProjectInfo-addMetaButton"
              onClick={this.addMeta}>
                <i className="fa fa-plus"/>
              </button>
            <div className="row">
              { this.renderMeta() }
            </div>
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
