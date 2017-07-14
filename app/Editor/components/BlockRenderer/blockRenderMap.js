import Immutable from 'immutable'
import { DefaultDraftBlockRenderMap } from 'draft-js'

const blockRender = {
  'hero': {
    element: 'section'
  }
}
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(Immutable.Map(blockRender))

export default extendedBlockRenderMap
