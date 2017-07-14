// @flow
import React, { Component } from 'react'
import CONSTANTS from './constants.js'
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
    title: 'Page Title',
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
      data: {}
    }
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
          if (!mode && this.props.canEdit) {
            this.props.update(this.state.data)
          }
        }
      )
    }
  }

  renderH1 (title: string) {
    const titleEditMode = this.state.editMode.title
    if (titleEditMode) {
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
      { title }
    </h1>
    )
  }

  renderOptions (value: string | number, label?: string | number) {
    return (<option key={value} value={value}>{label || value}</option>)
  }

  renderYear (year: number = 0) {
    const yearEditMode = this.state.editMode.year
    if (yearEditMode) {
      const date: Date = new Date()
      let yearOption = date.getFullYear()
      const end = yearOption - 10
      const options = []
      for (; end <= yearOption; yearOption--) {
        options.push(this.renderOptions(yearOption))
      }
      return (
        <select
          onChange={(e) => this.setEditMode('year', true, {year: e.target.value})}
          value={this.state.data.year}
          onBlur={() => this.setEditMode('year', false)}
          autoFocus
        >
          { options }
          <option value={0}>None</option>
        </select>
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
      const months = 12
      const options = []
      for (let i = 0; i < months; i++) {
        options.push(this.renderOptions(i, CONSTANTS.MONTHS[i]))
      }
      return (
        <select
          onChange={(e) => this.setEditMode('month', true, {month: e.target.value})}
          value={this.state.data.month}
          onBlur={() => this.setEditMode('month', false)}
          autoFocus
        >
          <option value={-1}>None</option>
          { options }
        </select>
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
    const { title, year, month } = this.props
    return (
      <section className="Hero">
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
