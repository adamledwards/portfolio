// @flow
import Hero from '~/modules/Hero'
import ProjectInfo from '~/modules/ProjectInfo'
import Text from '~/modules/Text'
import Credits from '~/modules/Credits'
import OtherArticles from '~/modules/OtherArticles'
import blockShallowCheck from '~/utils/blockShallowCheck.js'

const Components = {
  Hero: blockShallowCheck(Hero),
  ProjectInfo: blockShallowCheck(ProjectInfo),
  Text: blockShallowCheck(Text),
  Credits: blockShallowCheck(Credits),
  OtherArticles: blockShallowCheck(OtherArticles)
}

export default function blockRendererFn (block: string): React$Component<*> {
  return Components[block]
}
