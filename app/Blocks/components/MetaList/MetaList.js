// @flow
import React, { PureComponent } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Meta, { MetaEdit } from './Meta.js'
import createMeta from '~/utils/mutation/CreateMeta.js'
import updateMeta from '~/utils/mutation/updateMeta.js'

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
  state = {
    addNew: false
  }

  addNewMeta = () => {
    this.setState({
      addNew: true,
      heading: '',
      text: '',
      metaReadOnly: false
    })
  }

  cancelNewMeta = () => {
    this.setState({addNew: false})
  }

  handleOnChange = (event, key) => {
    this.setState({[key]: event.target.value})
  }

  commitMeta = (event, key) => {
    const { block } = this.props
    const { heading, text } = this.state
    this.setState({ metaReadOnly: true })
    return createMeta({
      blockId: block.id,
      field1: heading,
      field2: text
    }).then(this.cancelNewMeta)
  }

  renderEdit () {
    const { heading, text, metaReadOnly } = this.state
    return <MetaEdit
      readOnly={metaReadOnly}
      heading={heading}
      text={text}
      handleOnChange={this.handleOnChange}
      onClose={this.commitMeta}
      onRemove={() => this.setState({addNew: false})}
    />
  }

  render () {
    const { block } = this.props
    const { addNew } = this.state
    console.log(block)
    return (
      <div>
        <button
          className="ProjectInfo-addMetaButton"
          onClick={this.addNewMeta}>
            <i className="fa fa-plus"/>
          </button>
        <div className="row Meta-row">
          { addNew && this.renderEdit() }
          {block.metaConnection.edges.map((item) => <Meta blockId={block.id} key={item.node.id} item={item.node} />)}
        </div>
      </div>
    )
  }
}


export default createFragmentContainer(
  MetaList,
  {
    block: graphql`
      fragment MetaList_block on Block {
        id
        metaConnection (first: 10) @connection(key: "PageEditor_metaConnection") {
          edges {
            node {
              id
              ...Meta_item
            }
          }
        }
      }
    `,
  }
);
