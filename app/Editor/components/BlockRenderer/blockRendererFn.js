// @flow
import Hero from '~/modules/Hero'
import ProjectInfo from '~/modules/ProjectInfo'
import Text from '~/modules/Text'
import blockShallowCheck from '~/utils/blockShallowCheck.js'

const Components = {
  Hero: blockShallowCheck(Hero),
  ProjectInfo: blockShallowCheck(ProjectInfo),
  Text: blockShallowCheck(Text)
}

export default function blockRendererFn (block: string): React$Component<*> {
  return Components[block]
}
