// @flow
import React from 'react'
import { SortableElement, SortableContainer } from 'react-sortable-hoc'
import Hero from '~/Blocks/Hero'
import ProjectInfo from '~/Blocks/ProjectInfo'
import Text from '~/Blocks/Text'
import Credits from '~/Blocks/Credits'
import OtherArticles from '~/Blocks/OtherArticles'
import Images from '~/Blocks/Images'
import blockShallowCheck from '~/utils/blockShallowCheck.js'

const Components = {
  Hero: {
    component: blockShallowCheck(Hero),
    name: 'Hero'
  },
  ProjectInfo: {
    component: blockShallowCheck(ProjectInfo),
    name: 'Project Info'
  },
  Text: {
    component: blockShallowCheck(Text),
    name: 'Text'
  },
  Credits: {
    component: blockShallowCheck(Credits),
    name: 'Credits'
  },
  OtherArticles: {
    component: blockShallowCheck(OtherArticles),
    name: 'Other Articles'
  },
  'Images-1': {
    component: blockShallowCheck(Images),
    name: 'Image full width'
  },
  'Images-2': {
    component: blockShallowCheck(Images),
    name: 'Image 2 up'
  }
}

const SortableComponents = Object.keys(Components).reduce((accumulator, block) => {
  const { component: Component, name } = Components[block]

  accumulator[block] = SortableElement((props) => {
    return (
      <div className="soc-wapper">
        <div className="soc">
          <Component {...props} />
        </div>
      </div>
    )
  })
  accumulator[block].displayName = `SortableElement(${Component.displayName})`
  accumulator[block].friendlyName = name
  return accumulator
}, {})

export const blockRenderMap = (block: string, edit = false): React$Component<*> => {
  if (edit) {
    return SortableComponents[block]
  }
  return Components[block].component
}

export const BlockSortable = SortableContainer(({blocks, setSideBar, updateFn, handleRemove}) => {
  return (
    <section>
      {blocks
      .filter(({ node }) => node && typeof blockRenderMap(node.blockType) === 'function')
      .map(({ node }, i) => {
        const Block = blockRenderMap(node.blockType, true)
        return (
          <Block
            key={node.id + i}
            index={i}
            block={node}
            canEdit
            setSidebar={(sidebarElement) => setSideBar(sidebarElement, node.id, Block.friendlyName)}
            update={updateFn(node.id)}
            remove={() => handleRemove(node.id)}
          />
        )
      })}
    </section>
  )
})
