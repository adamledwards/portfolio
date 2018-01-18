// @flow
import React, { Component } from 'react'
import { getYears, getMonth } from '~/utils/inputUtils.js'
import CONSTANTS from '~/utils/constants.js'
import SelectInput from '~/Blocks/components/SelectInput.js'
import moment from 'moment'

type EditProps = {
  canEdit: true,
  date: string,
}

type DisplayProps = {
  canEdit: false,
  date: string,
}

type Props = EditProps | DisplayProps

class HeroDate extends Component {
  props: Props
  dateEL: HTMLElement
  onBlur: () => void
  state: {
    edit: boolean,
    month?: number,
    year?: number,
  }

  constructor (props: Props) {
    super(props)
    const momentDate = props.date ? moment(props.date) : moment()

    this.state = {
      edit: false,
      month: momentDate.month(),
      year: momentDate.year()
    }
    this.onBlur = this.onBlur.bind(this)
  }

  componentWillReceiveProps (nextProps: Props) {
    const momentDate = moment(nextProps.date)
    this.setState({
      month: momentDate.month(),
      year: momentDate.year()
    })
  }

  onBlur (e: Event) {
    if (
      this.yearEL &&
      this.monthEL &&
      e.target !== this.yearEL &&
      e.target !== this.monthEL
    ) {
      this.disableEdit()
    }
  }

  enableEdit = () => {
    if (this.props.canEdit === false) return
    this.setState({edit: true}, () => document.addEventListener('click', this.onBlur))
  }
  disableEdit = () => {
    if (this.props.canEdit === false) return
    this.setState({edit: false}, () => document.removeEventListener('click', this.onBlur))
  }

  setDate (partialDate: { year: number} | { month: number}) {
    this.setState((prevState) => {
      const { year, month } = prevState
      const newState = {year, month, ...partialDate}
      const newDate = moment(newState)
      if (newDate.isValid()) {
        this.props.update({date: newDate.toISOString()})
        newState.date = newDate
      }
      return newState
    })
  }

  renderYear (year: number = 0) {
    const { edit } = this.state
    if (edit) {
      return (
        <SelectInput
          onChange={(e) => this.setDate({year: e.target.value})}
          value={this.state.year}
          options={getYears()}
          selectRef={ref => { this.yearEL = ref }}
        />
      )
    }
    return (
      <span
        className="Hero-date"
        onClick={this.enableEdit}
      >
      {year || 'YYYY'}
      </span>
    )
  }

  renderMonth (month?: number = -1) {
    const { edit } = this.state
    if (edit) {
      return (
        <SelectInput
          onChange={(e) => this.setDate({month: e.target.value})}
          value={this.state.month}
          options={getMonth()}
          selectRef={ref => { this.monthEL = ref }}
        >
        </SelectInput>
      )
    }

    return (
      <span
        className="Hero-date"
        onClick={this.enableEdit}
      >
      { CONSTANTS.MONTHS[month] || 'MM' }
      </span>
    )
  }

  render () {
    const momentDate = moment(this.props.date)
    if (!this.props.canEdit) {
      return (
        <div>
          <span className="Hero-date">{CONSTANTS.MONTHS[momentDate.month()]}</span>
          &nbsp;&nbsp;
          <span className="Hero-date">{momentDate.year()}</span>
        </div>
      )
    }
    return (
      <div>
        {this.renderMonth(momentDate.month())}
        &nbsp;&nbsp;
        {this.renderYear(momentDate.year())}
      </div>
    )
  }
}

export default HeroDate
