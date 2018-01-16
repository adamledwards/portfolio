// @flow
import React, { PureComponent } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import Meta, { MetaEdit } from './Meta.js'
import createMeta from '~/utils/mutation/createMeta.js'

type State = {
  meta: MetaType,
  canEdit: boolean,
  editMode: {
    meta: null | number
  }
}

type Props = {
  canEdit: boolean,
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
    const { block, canEdit } = this.props
    const { addNew } = this.state
    return (
      <div>
        { canEdit &&
          <button
            className="ProjectInfo-addMetaButton"
            onClick={this.addNewMeta}>
              <i className="fa fa-plus"/>
          </button>
        }
        <div className="row Meta-row">
          { addNew && this.renderEdit() }
          {block.metaConnection.edges.map((item) => <Meta readOnly={!canEdit} blockId={block.id} key={item.node.id} item={item.node} />)}
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
