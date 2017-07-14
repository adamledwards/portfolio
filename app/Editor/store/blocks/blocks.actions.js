// @flow
import BLOCK_CONSTANTS from './blocks.constants.js'

export const addBlock = (block: string, data?: Object = {}) => ({
  type: BLOCK_CONSTANTS.ADD_BLOCK,
  block,
  data
})

export const removeBlock = (index: number) => ({
  type: BLOCK_CONSTANTS.REMOVE_BLOCK,
  index
})

export const changeBlock = (index: number, block: string, data?: Object = {}) => ({
  type: BLOCK_CONSTANTS.CHANGE_BLOCK,
  index,
  block,
  data
})
