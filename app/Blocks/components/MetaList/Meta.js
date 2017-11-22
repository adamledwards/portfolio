// @flow
import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import removeMeta from '~/utils/mutation/removeMeta.js'
import updateMeta from '~/utils/mutation/updateMeta.js'

type Props = {
  heading: string,
  text: string,
  onClick: Function
}

type EditProps = {
  heading: string,
  text: string,
  onChange: Function,
  onClose: Function,
  onRemove: Function
}

export const MetaEdit = (props) => {
  const { heading, text, onClose, onRemove, handleOnChange, readOnly } = props
  return (
    <div className="col-lg-3 Meta Meta--edit">
      <input className="Meta-heading" readOnly={readOnly} placeholder="Heading" value={heading} onChange={(event) => handleOnChange(event, 'heading')} type="text" />
      <input className="Meta-text" readOnly={readOnly} placeholder="Text" value={text} onChange={(event) => handleOnChange(event, 'text')} type="text" />
      <div className="row">
        <button onClick={onClose} ><i className="fa fa-check" aria-hidden="true" /></button>
        <button onClick={onRemove} ><i className="fa fa-times" aria-hidden="true" /></button>
      </div>
    </div>
  )
}

MetaEdit.defaultProps = {
  readOnly: false
}

class Meta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false ,
    }
  }

  handleEdit = () => {
    const { field1, field2 } = this.props.item
    this.setState({
      edit: true,
      heading: field1,
      text: field2
    })
  }

  handleOnChange = (event, key) => {
    this.setState({[key]: event.target.value})
  }

  onClose = () => {
    this.setState({edit: false})
  }

  updateMeta = (event, key) => {
    const { heading, text } = this.state
    const { item, blockId } = this.props
    this.setState({ edit: false })
    return updateMeta({
      id: item.id,
      field1: heading,
      field2: text
    }, blockId)
  }

  onRemove = () => {
    const { item, blockId } = this.props
    return removeMeta(item.id, blockId).then(() => {
      this.props.onRemove && this.props.onRemove()
    })
  }

  renderEdit () {
    const { heading, text } = this.state
    return <MetaEdit
      heading={heading}
      text={text}
      handleOnChange={this.handleOnChange}
      onClose={this.updateMeta}
      onRemove={this.onRemove}
    />
  }

  renderRead () {
    const { field1, field2 } = this.props.item
    return (
      <div className="col-lg-3 Meta" onClick={this.handleEdit}>
        <span className="Meta-heading">{field1}</span><br/>
        <span className="Meta-text">{field2}</span>
      </div>
    )
  }

  render () {
    return this.state.edit ? this.renderEdit() : this.renderRead()
  }
}

export default createFragmentContainer(
  Meta,
  {
    item: graphql`
      fragment Meta_item on Meta {
          id,
          field1,
          field2,
          position
      }
    `
  }
)
