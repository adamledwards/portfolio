// @flow
import React, { Component } from 'react'
import CONSTANTS from './constants.js'
import { SelectInput } from './Components'
import HeroSidebar, { HeroSidebarInput } from './HeroSidebar.js'
import { getYears, getMonth } from './inputUtils.js'
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
            this.props.update(this.state.data)
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
          <SelectInput
            onChange={(e) => this.setEditMode('month', true, {month: e.target.value})}
            value={this.state.data.month}
            onBlur={() => this.setEditMode('month', false)}
            autoFocus
            options={getMonth()}
          >
          </SelectInput>
          <SelectInput
            onChange={(e) => this.setEditMode('year', true, {year: e.target.value})}
            value={this.state.data.year}
            onBlur={() => this.setEditMode('year', false)}
            options={getYears()}
          />
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

  renderYear (year: number = 0) {
    const yearEditMode = this.state.editMode.year
    if (yearEditMode) {
      return (
        <SelectInput
          onChange={(e) => this.setEditMode('year', true, {year: e.target.value})}
          value={this.state.data.year}
          onBlur={() => this.setEditMode('year', false)}
          options={getYears()}
          autoFocus
        />
      )
    }
    return (
      <span
        className="Hero-date"
        onClick={() => this.setEditMode('year', true, {year})}
      >
      {year || 'YYYY'}
      </span>
    )
  }

  renderMonth (month?: number = -1) {
    const monthEditMode = this.state.editMode.month
    if (monthEditMode) {
      return (
        <SelectInput
          onChange={(e) => this.setEditMode('month', true, {month: e.target.value})}
          value={this.state.data.month}
          onBlur={() => this.setEditMode('month', false)}
          autoFocus
          options={getMonth()}
        >
        </SelectInput>
      )
    }

    return (
      <span
        className="Hero-date"
        onClick={() => this.setEditMode('month', true, {month})}
      >
      { CONSTANTS.MONTHS[month] || 'MM' }
      </span>
    )
  }

  render () {
    const { title = 'Insert Title', year, month } = this.props.data
    return (
      <section className="Hero" onClick={() => this.handleSidebarElement()}>
        <div className="row row--reverse middle">
          <div className="col-lg-6">
          { this.renderH1(title) }
          <div className="Hero-date">
            { this.renderMonth(month) }
            &nbsp;&nbsp;
            { this.renderYear(year) }
          </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
