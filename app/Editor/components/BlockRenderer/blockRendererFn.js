// @flow
import Hero from '~/modules/Hero'
import ProjectInfo from '~/modules/ProjectInfo'

const Components = {
  Hero,
  ProjectInfo
}


export default function blockRendererFn (block: string) {
  return Components[block]
}
