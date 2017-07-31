// @flow
import Hero from '~/modules/Hero'
import ProjectInfo from '~/modules/ProjectInfo'
import Text from '~/modules/Text'

const Components = {
  Hero,
  ProjectInfo,
  Text
}

export default function blockRendererFn (block: string): React$Component<*> {
  return Components[block]
}
