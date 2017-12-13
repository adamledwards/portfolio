// @flow
import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
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

export default function blockRendererFn (block: string): React$Component<*> {
  return Components[block]
}

export function blockRendererSortableFn (block: string): React$Component<*> {
  const Component = Components[block]
  if (!Components[block]) {
    return
  }
  return SortableElement((props) => <Component {...props} />)
}
