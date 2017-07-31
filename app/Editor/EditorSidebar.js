// @flow
import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import classNames from 'classnames'
import { STYLES, BULLET_LIST } from './constants.js'
import type { EditorSidebarProps } from './Editor.types.js'
import type { DraftBlockType } from 'draft-js/lib/DraftBlockType'

class EditorSidebar extends Component {
  props: EditorSidebarProps
  toggleInlineStyle (style: string) {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, style))
  }

  toggleBlockType (style: DraftBlockType) {
    this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, style))
  }

  render () {
    const { editorState } = this.props
    const currentStyle: { has: () => boolean} = editorState.getCurrentInlineStyle()
    const selection = editorState.getSelection()
    const blockType = this.props.editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType()

    return (
      <div className="EditorSidebar">
        <section className="PageEditor-Sidebar-section">
          <span className="PageEditor-Sidebar-subHeading">Fonts</span>
          <div className="row EditorSidebar-row">
            {STYLES.map(style => {
              const onToggle = (e: Event) => {
                e.preventDefault()
                this.toggleInlineStyle(style)
              }
              return (
                <button
                  key={style}
                  className={classNames('EditorSidebar-button', { active: currentStyle.has(style) })}
                  onMouseDown={onToggle}
                >
                <i className={`fa fa-${style.toLowerCase()}`} aria-hidden="true" />
                </button>
              )
            })}
          </div>
          <span className="PageEditor-Sidebar-subHeading">Bullet & List</span>
          <div className="row EditorSidebar-row">
            {BULLET_LIST.map(type => {
              const onToggle = (e: Event) => {
                e.preventDefault()
                this.toggleBlockType(type.style)
              }
              return (
                <button
                  key={type.style}
                  className={classNames('EditorSidebar-button', { active: type.style === blockType })}
                  onMouseDown={onToggle}
                >
                <i className={`fa fa-${type.icon}`} aria-hidden="true" />
                </button>
              )
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default EditorSidebar
