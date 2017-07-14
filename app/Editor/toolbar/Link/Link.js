// @flow
import React from 'react'

import { EditorState, Modifier } from 'draft-js'

export function addLink (editorState: EditorState, href: string, text: string) {
  const contentState = editorState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity(
    'LINK',
    'MUTABLE',
    { href }
  )

  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

  const newContentState = Modifier.replaceText(
    contentStateWithEntity,
    editorState.getSelection(),
    text,
    null,
    entityKey
  )

  return EditorState.push(editorState, newContentState, 'apply-entity')
}

export function removeLink (editorState: EditorState) {
  const contentState = editorState.getCurrentContent()
  const newContentState = Modifier.applyEntity(
    contentState,
    editorState.getSelection(),
    null
  )
  return EditorState.push(editorState, newContentState, 'apply-entity')
}

export function findLinkEntities (contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(CharacterMetadata => {
    const entityKey = CharacterMetadata.getEntity()
    return (
      entityKey !== null &&
       contentState.getEntity(entityKey).getType() === 'LINK'
    )
  }, callback)
}

export const Link = (props) => {
  const { href } = props.contentState.getEntity(props.entityKey).getData()
  return <a href={href}>{props.children}</a>
}

export default {
  addLink,
  findLinkEntities,
  Link
}
