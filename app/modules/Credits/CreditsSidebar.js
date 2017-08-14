import React from 'react'
import { TwitterPicker } from 'react-color'
import { Meta } from './Meta.js'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import { COLOURS } from './constants.js'

const SortableItem = SortableElement(({item}) =>
  <li className="ProjectInfoSidebar-metaListItem"><Meta {...item} /></li>
);

const SortableList = SortableContainer(({meta}) => {
  return (
    <ul className="ProjectInfoSidebar-metaList">
      {meta.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} item={item} />
      ))}
    </ul>
  );
});


class ProjectInfoSidebar extends React.Component {
  static defaultProps = {
    meta: []
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.updateMeta(arrayMove(this.props.meta, oldIndex, newIndex))
  };
  render () {
    const { backgroundColor, onChangeComplete, meta } = this.props
    return (
      <div>
        <span className="PageEditor-Sidebar-heading">Project Info</span>
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Background Colour</span>
          <TwitterPicker colors={COLOURS} color={backgroundColor} onChangeComplete={onChangeComplete} width="182" triangle="hide"/>
        </section>
        {meta.length > 0 &&
          <section className="PageEditor-Sidebar-section">
            <span className="PageEditor-Sidebar-subHeading">Meta List</span>
             <SortableList meta={meta} onSortEnd={this.onSortEnd} />
          </section>
        }
        {this.props.children}
      </div>
    )
  }
}


export default ProjectInfoSidebar
