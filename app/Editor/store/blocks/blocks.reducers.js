// @flow
import BLOCK_CONSTANTS from './blocks.constants.js'

type StateType = {
  block: string,
  data: Object
}

type Action =
  | { type: 'ADD_BLOCK', block: string, data: Object }
  | { type: 'REMOVE_BLOCK', index: number }
  | { type: 'CHANGE_BLOCK', block: string, data: Object, index: number }

const formatBlock = (block: string, data: Object, oldBlock = {}): StateType => ({
  block,
  data
})

function blocksReducer (state: Array<StateType> = [], action: Action) {
  switch (action.type) {
    case BLOCK_CONSTANTS.ADD_BLOCK:
      return [...state, formatBlock(action.block, action.data)]
    case BLOCK_CONSTANTS.REMOVE_BLOCK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case BLOCK_CONSTANTS.CHANGE_BLOCK:
      return [
        ...state.slice(0, action.index),
        formatBlock(action.block, action.data, state[action.index]),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

export type blockState = Array<StateType>
export default blocksReducer
