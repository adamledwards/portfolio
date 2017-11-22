// @flow
import React, { Component } from 'react'
import moment from 'moment'
import Modal from '~/Editor/toolbar/Modal'
import SelectInput from '~/Blocks/Components/SelectInput.js'
import { getYears, getMonth, getDays } from '~/utils/inputUtils.js'
import { createPage } from '~/utils/mutation'
import { navigate } from '~/utils/history.js'


class NewPage extends Component {
  props: Props

  constructor(props) {
    super(props)
    this.state = {
      pageTitle: '',
      client: '',
      month: '',
      year: '',
      day: '',
      listingImage: ''
    }
  }

  validateCommitNewPage () {
    const { pageTitle: title,  client, day, month, year } = this.state
    const projectGoLive = moment.utc({day: parseInt(day), month: parseInt(month), year: parseInt(year)})
    if (!projectGoLive.isValid()) {
      throw Error('Enter a valid date')
    }
    const pageInput = {
      title,
      client,
      projectGoLive: projectGoLive.toISOString()
    }
    createPage(pageInput, this.state.listingImage).then((response) => {
      navigate('editPage', {id: response.page.id})
    })
  }

  render () {
    return (
      <Modal>
        <div className="row">
          <span className="Modal-header">New Page</span>
        </div>
        <div className="row">
          <input placeholder="Title" type="text" value={this.state.pageTitle} onChange={(e) => this.setState({pageTitle: e.target.value})} />
        </div>
        <div className="row">
          <input placeholder="Client " value={this.state.client} onChange={(e) => this.setState({client: e.target.value})} type="text" />
        </div>
        <div className="row">
          <SelectInput
            onChange={(e: Event) => this.setState({day: e.target.value})}
            value={this.state.day}
            options={getDays()}
          />
          <SelectInput
            onChange={(e) => this.setState({month: e.target.value})}
            value={this.state.month}
            options={getMonth()}
          />
          <SelectInput
            onChange={(e) => this.setState({year: e.target.value})}
            value={this.state.year}
            options={getYears()}
          />
        </div>
        <div className="row">
          <input placeholder="project date" onChange={(e) => this.setState({listingImage: e.target.files})} type="File" />
        </div>
        <div className="LinkPrompt-actions row">
          <button onClick={() => this.validateCommitNewPage()}>OK</button>
        </div>
      </Modal>
    )
  }
}

export default NewPage
