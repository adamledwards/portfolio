// @flow
import type { EditorState } from 'draft-js'
export type DisplayProps = {
  info1Heading?: string,
  info2Heading?: string,
  textColour: string,
  readOnly: true,
  editorState: EditorState,
}

export type EditProps = {
  info1Heading?: string,
  info2Heading?: string,
  textColour: string,
  readOnly: false,
  setSidebar: () => void,
  onChange: () => void,
  editorState: EditorState,
}

export type CharacterFormatList = {
  LINK?: 'LINK',
  UNDERLINE?: 'UNDERLINE',
  BOLD?: 'BOLD',
  ITALIC?: 'ITALIC'
}

export type State = {
  showToolBar: boolean,
  linkPrompt: boolean,
  focus: boolean,
  characterState: CharacterFormatList
}

export type EditorSidebarProps = {
  onChange: () => void,
  editorState: EditorState,
}

export type Props = DisplayProps | EditProps
