// @flow
import React, { Component } from 'react'
import Editor from '~/Editor'
import { Meta, MetaEdit } from './Meta.js'
import './ProjectInfo.style.scss'
import 'draft-js/dist/Draft.css'

type MetaType = {
  heading: string,
  text: string
}

type DisplayProps = {
  canEdit: boolean,
  meta: [MetaType],
  editor: Object
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
  handleMetaChange: Function
  addMeta: Function
  static defaultProps = {
    meta: [],
    canEdit: false
  }

  constructor (props: Props) {
    super(props)
    this.state = {
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
  }

  addMeta () {
    this.setState({
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        ...this.state.editMode,
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
        ...this.state.editMode,
        meta: index
      }
    })
  }

  handleMetaClose (index: number, isNew: boolean) {
    const { meta } = this.props
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
    this.setState({
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        ...this.state.editMode,
        meta: null
      }
    }, () => this.props.update({meta: newMeta}))
  }

  renderMeta () {
    const { meta } = this.props
    const { editMode, meta: metaEdit } = this.state
    const { meta: metaEditMode } = editMode
    let newMetaElement

    const metaElements = meta.map((props, i) => {
      return metaEditMode === i || (isNew && i === 0)
      ? <MetaEdit key={i} {...metaEdit} onClose={() => this.handleMetaClose(i, isNew)} onChange={this.handleMetaChange}/>
    : <Meta key={i} {...props} onClick={() => this.handleMetaClick(i, props)} />
    })

    const isNew = metaEditMode === -1
    if (isNew) {
      newMetaElement = <MetaEdit {...metaEdit} onClose={() => this.handleMetaClose(0, isNew)} onChange={this.handleMetaChange}/>
    }
    return [newMetaElement, ...metaElements]
  }

  render () {
    return (
      <section className="ProjectInfo container">
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
            <Editor />
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectInfo
