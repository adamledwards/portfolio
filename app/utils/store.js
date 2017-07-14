// @flow
import { createStore, combineReducers } from 'redux'
import blockReducers from '~/editor/store/blocks'
import type { blockState } from '~/editor/store/blocks'

const reducers = {
  blocks: blockReducers
}

export type State = {
  blocks: blockState
}

export default () => createStore(combineReducers(reducers))
