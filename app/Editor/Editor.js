// @flow
import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import { removeLink } from './toolbar/Link/Link.js'
import classNames from 'classnames'
import LinkPrompt from './toolbar/Link/LinkPrompt.js'
import { STYLES } from './constants.js'
import type { Props, State, CharacterFormatList } from './Editor.types.js'
import 'draft-js/dist/Draft.css'
import './Editor.style.scss'

class EditorComponent extends Component {
  props: Props
  state: State
  entityKey: ?string
  editor: HTMLElement
  stylesMap: Object
  entityMap: Object
  toolbarTimeout: number

  static defaultProps = {
    textColour: '#000000'
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      showToolBar: false,
      focus: false,
      linkPrompt: false,
      characterState: {}
    }
    this.stylesMap = {}
    this.entityMap = {}
  }

  addLink = () => this.setState({linkPrompt: true})

  handleOnFocus = () => {
    clearTimeout(this.toolbarTimeout)
    this.setState({showToolBar: true, focus: true})
  }

  handleOnBlur = () => {
    this.setState({focus: false})
    this.toolbarTimeout = setTimeout(() => {
      this.setState({showToolBar: false})
    }, 5000)
    const contentState = this.props.editorState.getCurrentContent()
    console.log(convertToRaw(contentState))
  }

  handleOnChange = (editorState: EditorState, focus: boolean = false) => {
    if (!this.props.readOnly) {
      let focusFunc
      if (focus) {
        focusFunc = () => {
          setTimeout(() => {
            this.editor.focus()
          }, 0)
        }
      }

      this.props.onChange(editorState)
      this.setState(
        {
          linkPrompt: false
        },
      focusFunc)
    }
  }

  handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(this.props.editorState, command)
    if (newState) {
      this.handleOnChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  handleRemoveLink = () => {
    this.handleOnChange(removeLink(this.props.editorState), true)
  }

  getCharacterData (editorState: EditorState): CharacterFormatList {
    const selectionState = editorState.getSelection()
    const start = selectionState.getStartOffset()
    const anchorKey = selectionState.getAnchorKey()
    const contentState = editorState.getCurrentContent()
    const contentBlock = contentState.getBlockForKey(anchorKey)

    const entityKey = contentBlock.getEntityAt(start)
    if (this.entityKey !== entityKey) {
      this.entityKey = entityKey
      this.entityMap = {}
      if (entityKey) {
        const entity = contentState.getEntity(entityKey)
        const type = entity.getType()
        this.entityMap = {[type]: true}
      }
    }
    return { ...this.entityMap }
  }

  toggleInlineStyle (style: string) {
    this.handleOnChange(RichUtils.toggleInlineStyle(this.props.editorState, style))
  }

  renderToolbar () {
    const { showToolBar, focus } = this.state
    const { editorState } = this.props
    const characterState = this.getCharacterData(editorState)
    const currentStyle: { has: () => boolean} = editorState.getCurrentInlineStyle()

    return (
      <div className={classNames('EditorComponent-toolbar', {active: showToolBar, suspend: !focus})}>
        <button
          className={classNames('EditorComponent-button', { active: characterState['LINK'] })}
          onClick={this.addLink}
          disabled={!showToolBar}
        >
          <i className="fa fa-link" aria-hidden="true" />
        </button>
        <button className="EditorComponent-button" onClick={this.handleRemoveLink} disabled={!showToolBar}>
          <i className="fa fa-chain-broken" aria-hidden="true" />
        </button>
        {STYLES.map(style => {
          const onToggle = (e: Event) => {
            e.preventDefault()
            this.toggleInlineStyle(style)
          }
          return (
            <button
              key={style}
              className={classNames('EditorComponent-button', { active: currentStyle.has(style) })}
              onMouseDown={onToggle}
              disabled={!showToolBar}
            >
            <i className={`fa fa-${style.toLowerCase()}`} aria-hidden="true" />
            </button>
          )
        })}
      </div>
    )
  }

  render () {
    const { editorState, textColour } = this.props
    return (
      <div className="EditorComponent" style={{color: textColour}} onClick={(e: Event) => e.stopPropagation()}>
        {this.renderToolbar()}
        { this.state.linkPrompt &&
          <LinkPrompt
            editorState={editorState}
            onChange={this.handleOnChange}
            onClose={() => this.setState({linkPrompt: false})}
          />
        }
        <Editor
          ref={(editor: HTMLElement) => { this.editor = editor } }
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.handleOnChange}
          placeholder="Write something about the project Ash..."
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          readOnly={this.props.readOnly}
        />
      </div>
    )
  }
}

export default EditorComponent
