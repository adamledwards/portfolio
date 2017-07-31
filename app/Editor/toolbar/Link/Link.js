// @flow
import React from 'react'
import { EditorState, Modifier } from 'draft-js'
import type { ContentBlock, ContentState } from 'draft-js'

export function addLink (editorState: EditorState, href: string, text: string): EditorState {
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

export function removeLink (editorState: EditorState): EditorState {
  const contentState = editorState.getCurrentContent()
  const newContentState = Modifier.applyEntity(
    contentState,
    editorState.getSelection(),
    null
  )
  return EditorState.push(editorState, newContentState, 'apply-entity')
}

export function findLinkEntities (contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState): void {
  contentBlock.findEntityRanges(characterMetadata => {
    const entityKey = characterMetadata.getEntity()
    if (entityKey) {
      return contentState.getEntity(entityKey).getType() === 'LINK'
    }
    return false
  }, callback)
}

export const Link = ({ contentState, children, entityKey }: {contentState: ContentState, children: React$Element<any>, entityKey: string}) => {
  const { href }:{ href: string} = contentState.getEntity(entityKey).getData()
  return <a href={href}>{children}</a>
}

export default {
  addLink,
  findLinkEntities,
  Link
}
