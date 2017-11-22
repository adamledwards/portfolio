import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import updateMeta from '~/utils/mutation/updateMeta.js'

const SortableItem = SortableElement(({meta}) => (
  <div className="Meta">
    <span className="Meta-heading">{meta.field1}</span><br/>
    <span className="Meta-text">{meta.field2}</span>
  </div>
))

const Sortable = SortableContainer(({block}) => {
  return (
    <ul className="ProjectInfoSidebar-metaList">
      {block.metaConnection.edges.map((item, index) => (
        <SortableItem key={item.node.id} index={index} meta={item.node} />
      ))}
    </ul>
  )
})


class MetaSortable extends Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    const { block } = this.props
    const item = block.metaConnection.edges[oldIndex]
    updateMeta({
      id: item.node.id,
      position: newIndex
    }, block.id)
  }

  render () {
    const { block } = this.props

    return (
      <section className="PageEditor-Sidebar-section">
        <span className="PageEditor-Sidebar-subHeading">Meta List</span>
         <Sortable block={block} onSortEnd={this.onSortEnd} />
      </section>
    )
  }
}

export default createFragmentContainer(
  MetaSortable,
  {
    block: graphql`
      fragment MetaSortable_block on Block {
        id
        metaConnection (first: 10) @connection(key: "PageEditor_metaConnection") {
          edges {
            node {
              id
              field1
              field2
              position
            }
          }
        }
      }
    `,
  }
);
