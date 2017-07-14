// @flow
import PageEditor from './PageEditor.js'
import { addBlock, removeBlock, changeBlock } from '~/editor/store/blocks'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import type { State } from '~/utils/store.js'

const mapStateToProps = (state: State) => ({
  blocks: state.blocks
})

const mapActionsToProps = (dispatch: Dispatch<*>) => ({
  addBlock: (block: string, data?: Object) => dispatch(addBlock(block, data)),
  removeBlock: (index: number) => dispatch(removeBlock(index)),
  changeBlock: (index: number, block: string, data?: Object) => dispatch(changeBlock(index, block, data))
})

export default connect(mapStateToProps, mapActionsToProps)(PageEditor)
