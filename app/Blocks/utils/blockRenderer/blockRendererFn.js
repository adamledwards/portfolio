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
  Hero: blockShallowCheck(Hero),
  ProjectInfo: blockShallowCheck(ProjectInfo),
  Text: blockShallowCheck(Text),
  Credits: blockShallowCheck(Credits),
  OtherArticles: blockShallowCheck(OtherArticles),
  'Images-1': blockShallowCheck(Images),
  'Images-2': blockShallowCheck(Images)
}

const SortableComponents = Object.keys(Components).reduce((accumulator, block) => {
  const Component = Components[block]

  accumulator[block] = SortableElement((props) => {
    return (
      <div className="soc-wapper">
        <div className="soc">
          <Component {...props} />
        </div>
      </div>
    )
  })
  return accumulator
}, {})

const blockRendererFn = (block: string, edit = false): React$Component<*> => {
  if (edit) {
    return SortableComponents[block]
  }
  return Components[block]
}

export const BlockSortable = SortableContainer(({blocks, setSideBar, updateFn, handleRemove}) => {
  return (
    <section>
      {blocks
      .filter(({ node }) => node && typeof blockRendererFn(node.blockType) === 'function')
      .map(({ node }, i) => {
        const Block = blockRendererFn(node.blockType, true)
        return (
          <Block
            key={node.id + i}
            index={i}
            block={node}
            canEdit
            setSidebar={(sidebarElement) => setSideBar(sidebarElement, node.id)}
            update={updateFn(node.id)}
            remove={() => handleRemove(node.id)}
          />
        )
      })}
    </section>
  )
})
