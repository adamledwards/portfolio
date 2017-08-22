// @flow
import React, { PureComponent } from 'react'
import { Meta, MetaEdit, type MetaType } from './Meta.js'

type State = {
  meta: MetaType,
  editMode: {
    meta: null | number
  }
}

type Props = {
  meta: Array<MetaType>
}

class MetaList extends PureComponent {
  state: State
  props: Props
  static defaultProps = {
    meta: []
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
    }, () => this.props.update(meta))
  }

  addMeta = () => {
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

  handleMetaChange = (meta: MetaType) => {
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

  handleMetaRemove (isNew: boolean, index: number) {
    if(!isNew) {
      const { meta } = this.props
      const newMeta = [
        ...meta.slice(0, index),
        ...meta.slice(index + 1)
      ]
      this.updateMeta(newMeta)
    } else {
      this.setState({editMode: {meta: null}})
    }
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
        onRemove={() => this.handleMetaRemove(isNew, index)}
      />
    )
  }

  render () {
    const { meta } = this.props
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
    return (
      <div>
        <button
          className="ProjectInfo-addMetaButton"
          onClick={this.addMeta}>
            <i className="fa fa-plus"/>
          </button>
        <div className="row Meta-row">
          { [newMetaElement, ...metaElements] }
        </div>
      </div>
    )
  }
}

export default MetaList
