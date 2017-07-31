// @flow

import { findLinkEntities, Link } from './toolbar/Link/Link.js'
import { CompositeDecorator } from 'draft-js'

export const STYLES = [
  'BOLD',
  'ITALIC',
  'UNDERLINE'
]

export const BULLET_LIST = [
  {icon: 'list-ul', style: 'unordered-list-item'},
  {icon: 'list-ol', style: 'ordered-list-item'}
]


export const compsiteDecorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link
  }
])
