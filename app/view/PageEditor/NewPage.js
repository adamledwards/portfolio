// @flow
import React, { Component } from 'react'
import moment from 'moment'
import Modal from '~/Editor/toolbar/Modal'
import SelectInput from '~/Blocks/Components/SelectInput.js'
import { getYears, getMonth } from '~/utils/inputUtils.js'
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
      listingImage: ''
    }
  }

  validateCommitNewPage () {
    const { pageTitle: title, client, month, year } = this.state
    const projectGoLive = moment.utc({day: 1, month: parseInt(month), year: parseInt(year)})
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
        <div className="Modal-header">
          <span>New Page</span>
        </div>
        <div className="Modal-row">
          <label>Page Title</label>
          <input placeholder="Title" type="text" value={this.state.pageTitle} onChange={(e) => this.setState({pageTitle: e.target.value})} />
        </div>
        <div className="Modal-row">
          <label>Client</label>
          <input placeholder="Client " value={this.state.client} onChange={(e) => this.setState({client: e.target.value})} type="text" />
        </div>
        <div className="Modal-row">
          <label>Date of project</label>
          <div>
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
        </div>
        <div className="Modal-row">
          <label>Tile Image</label>
          <input placeholder="project date" onChange={(e) => this.setState({listingImage: e.target.files})} type="File" />
        </div>
        <div className="LinkPrompt-actions Modal-row">
          <button className="button-text" onClick={() => this.validateCommitNewPage()}>OK</button>
        </div>
      </Modal>
    )
  }
}

export default NewPage
