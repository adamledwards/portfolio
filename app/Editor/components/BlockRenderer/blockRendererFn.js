// @flow
import Hero from '~/page/modules/Hero'
import ProjectInfo from '~/page/modules/ProjectInfo'
import Text from '~/page/modules/Text'
import Credits from '~/page/modules/Credits'
import OtherArticles from '~/page/modules/OtherArticles'
import Images from '~/page/modules/Images'
import blockShallowCheck from '~/utils/blockShallowCheck.js'

const Components = {
  Hero: blockShallowCheck(Hero),
  ProjectInfo: blockShallowCheck(ProjectInfo),
  Text: blockShallowCheck(Text),
  Credits: blockShallowCheck(Credits),
  OtherArticles: blockShallowCheck(OtherArticles),
  Images: blockShallowCheck(Images)
}

export default function blockRendererFn (block: string): React$Component<*> {
  return Components[block]
}
