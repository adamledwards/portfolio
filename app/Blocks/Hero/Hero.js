// @flow
import React, { Component } from 'react'
import moment from 'moment'
import HeroSidebar, { HeroSidebarInput } from './HeroSidebar.js'
import HeroDate from './components/HeroDate.js'
import { createFragmentContainer, graphql } from 'react-relay'
import { ImageUploaderWrapper } from '~/Blocks/components/ImageUploader'

import './Hero.style.scss'

type EditProps = {
  title: string,
  month?: number,
  year?: number,
  update: () => void,
  canEdit: true
}

type DisplayProps = {
  title: string,
  month?: number,
  year?: number,
  canEdit: false
}

type Props = EditProps | DisplayProps

type State = {
  editMode: {
    title: boolean,
    month: boolean,
    year: boolean
  },
  data: {
    title?: string,
    month?: number,
    year?: number
  }
}

class Hero extends Component {
  props: Props;
  state: State;

  static defaultProps = {
    canEdit: false
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      editMode: {
        title: false,
        month: false,
        year: false
      },
      data: {
        title: ''
      }
    }
  }
  componentDidUpdate () {
    this.handleSidebarElement()
  }

  _update = (payload) => {
     const { title, date } = this.props.block
    this.props.update({title, date, ...payload})
  }

  setEditMode (key: string, mode: boolean, data?: Object = {}): void {
    if (this.props.canEdit) {
      this.setState(
        {
          data: {
            ...this.state.data,
            ...data
          },
          editMode: {
            ...this.state.editMode,
            [key]: mode
          }
        },
        (state) => {
          if (mode === false && this.props.canEdit) {
            const { title } = this.state.data
            this._update({ title })
          }
        }
      )
    }
  }

  handleSidebarElement () {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar())
    }
  }

  renderSidebar () {
    return (
      <HeroSidebar>
        <HeroSidebarInput name="Title">
          <input
            type="text"
            value={this.state.data.title}
            onChange={(e) => this.setEditMode('title', null, {title: e.target.value})}
            onBlur={() => this.setEditMode('title', false)}
            placeholder="Insert Title"
          />
        </HeroSidebarInput>
        <HeroSidebarInput name="Date">
          <HeroDate date={this.props.block.date} alwaysEdit={true} canEdit update={this._update} />
        </HeroSidebarInput>
      </HeroSidebar>
    )
  }

  renderH1 (title: string) {
    const titleEditMode = this.state.editMode.title
    if (titleEditMode === true) {
      return <input
        className="Hero-h1 Hero-h1--input"
        type="text"
        value={this.state.data.title}
        onChange={(e) => this.setEditMode('title', true, {title: e.target.value})}
        onBlur={() => this.setEditMode('title', false)}
        autoFocus
        />
    }
    return (
      <h1
        className="Hero-h1"
        onClick={() => this.setEditMode('title', true, {title})}
      >
      { titleEditMode !== null ? title : this.state.data.title }
    </h1>
    )
  }

  render () {
    const { title = 'Insert Title', block, canEdit } = this.props
    let style = {}
    console.log(block.fileConnection)
    const { node: file } = block.fileConnection.edges[0]
    if (file) {
      style = {
        backgroundImage: `url(${file.fullPath})`,
        backgroundColor: 'transparent'
      }
    }

    style.backgroundImage
    return (
      <ImageUploaderWrapper block={block} scope="hero">
        <section className="Hero" onClick={() => this.handleSidebarElement()} style={style}>
          <div className="row row--reverse middle">
            <div className="col-lg-6">
            { this.renderH1(block.title) }
            <div className="Hero-date">
              <HeroDate date={block.date} canEdit={canEdit} update={this.props.update} />
            </div>
            </div>
          </div>
        </section>
      </ImageUploaderWrapper>
    )
  }
}

export default createFragmentContainer(
  Hero,
  {
    block: graphql`
      fragment Hero_block on Block {
        id
        title
        date
        fileConnection (first: 1000) @connection(key: "Block_fileConnection") {
          edges {
            node {
              id
              fullPath
              scope
            }
          }
        }
        ...ImageUploader_block
      }
    `,
  }
);
