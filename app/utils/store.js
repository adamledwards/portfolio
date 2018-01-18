// @flow
import { createStore, combineReducers } from 'redux'
import blockReducers from '~/Editor/store/blocks'
import type { blockState } from '~/Editor/store/blocks'

const reducers = {
  blocks: blockReducers
}

export type State = {
  blocks: blockState
}

export default () => createStore(combineReducers(reducers))
