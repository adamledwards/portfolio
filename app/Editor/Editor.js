// @flow
import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, CompositeDecorator, convertToRaw, convertFromRaw } from 'draft-js'
import { findLinkEntities, Link, removeLink } from './toolbar/Link/Link.js'
import classNames from 'classnames'
import LinkPrompt from './toolbar/Link/LinkPrompt.js'
import 'draft-js/dist/Draft.css'
import './Editor.style.scss'
import { STYLES } from './constants.js'

type DisplayProps = {
  info1Heading?: string,
  info2Heading?: string,
  canEdit: false
}
type CharacterFormatList = {
  LINK?: 'LINK',
  UNDERLINE?: 'UNDERLINE',
  BOLD?: 'BOLD',
  ITALIC?: 'ITALIC'
}

type State = {
  editorState: EditorState,
  focused: boolean,
  hasSelection: boolean,
  linkPrompt: boolean,
  characterState: CharacterFormatList
}

type Props = DisplayProps

class EditorComponent extends Component {
  props: Props
  state: State
  addLink: () => void
  handleKeyCommand: () => void
  onChange: () => void
  handleRemoveLink: () => void
  editor: HTMLElement
  stylesMap: Object
  entityMap: Object

  constructor (props: Props) {
    super(props)
    const compsiteDecorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link
      }
    ])
    this.state = {
      editorState: EditorState.createEmpty(compsiteDecorator),
      focused: false,
      hasSelection: false,
      linkPrompt: false,
      characterState: {}
    }
    this.stylesMap = {}
    this.entityMap = {}

    this.addLink = () => this.setState({linkPrompt: true})
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleRemoveLink = this.handleRemoveLink.bind(this)
    this.handleRemoveLink = this.handleRemoveLink.bind(this)
  }

  onChange (editorState: EditorState, focus: boolean = false) {
    let focusFunc
    if (focus) {
      focusFunc = () => {
        setTimeout(() => {
          this.editor.focus()
        }, 0)
      }
    }
    this.setState(
      {
        editorState,
        hasSelection: !editorState.getSelection().isCollapsed(),
        linkPrompt: false,
        characterState: this.getCharacterData(editorState)
      },
    focusFunc)
  }

  getCharacterData (editorState: EditorState): CharacterFormatList {
    const selectionState = editorState.getSelection()
    const start = selectionState.getStartOffset()
    const anchorKey = selectionState.getAnchorKey()
    const contentState = editorState.getCurrentContent()
    const contentBlock = contentState.getBlockForKey(anchorKey)
    const style = contentBlock.getInlineStyleAt(start)

    if (this.selectedStyles !== style) {
      this.selectedStyles = style
      this.stylesMap = style.toJS().reduce(
        (obj, key) => ({
          [key]: true,
          ...obj
        }),
        {})
    }
    const entityKey = contentBlock.getEntityAt(start)
    if (this.entityKey !== entityKey) {
      this.entityKey = entityKey
      this.entityMap = {}
      if (entityKey !== null) {
        const entity = contentState.getEntity(entityKey)
        const type = entity.getType()
        this.entityMap = {[type]: true}
      }
    }
    return {...this.entityMap, ...this.stylesMap}
  }

  handleKeyCommand (command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  toggleInlineStyle (style: string) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style))
  }

  handleRemoveLink () {
    this.onChange(removeLink(this.state.editorState), true)
  }

  renderToolbar () {
    const { characterState } = this.state
    return (
      <div className="EditorComponent-toolbar">
        <button className="EditorComponent-button" onClick={this.addLink}>
          <i className="fa fa-link" aria-hidden="true" />
        </button>
        <button className="EditorComponent-button" onClick={this.handleRemoveLink} >
          <i className="fa fa-chain-broken" aria-hidden="true" />
        </button>
        {STYLES.map(style => (
          <button
            key={style}
            className={classNames('EditorComponent-button', { active: characterState[style] })}
            onClick={() => this.toggleInlineStyle(style)}
          >
            <i className={`fa fa-${style.toLowerCase()}`} aria-hidden="true" />
          </button>
        ))}
      </div>
    )
  }

  render () {
    return (
      <div className="EditorComponent">
        { this.state.hasSelection && this.renderToolbar() }
        { this.state.linkPrompt &&
          <LinkPrompt
            editorState={this.state.editorState}
            onChange={this.onChange}
            onClose={() => this.setState({linkPrompt: false})}
          />
        }
        <Editor
          ref={(editor: HTMLElement) => { this.editor = editor } }
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="Write something about the project Ash..."
        />
      </div>
    )
  }
}

export default EditorComponent
