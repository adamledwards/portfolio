import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { removeBlock, updatePage } from '~/utils/mutation'
import './Sidebar.style.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    const { page } = props
    this.state = {
      title: { value: page.title },
      client: { value: page.client },
      description: { value: page.description || '' }
    }
  }

  editInput = (input, text) => {
    this.setState({
      [input]: { value: text }
    })
  }

  savePage = (pageInput) => {
    const { page } = this.props
    updatePage(page.id, pageInput)
  }

  uploadImage = (file) => {
    const { page } = this.props
    updatePage(page.id, {}, [file])
  }

  render () {
    const { sidebar, handleRemove, page, clearSidebar } = this.props
    const { title, client, description } = this.state
    return (
      <section className="PageEditor-Sidebar">
        <span className="PageEditor-Sidebar-heading">
        {
          sidebar ?
          <div className="PageEditor-Sidebar-blockTitle">
            <button onClick={clearSidebar}><i className="fa fa-arrow-left" /></button>
            {sidebar.title}
          </div>
          : page.title 
        }
        </span>
        {
          sidebar ? sidebar.sidebarElement
          :
          <div>
            <section className="PageEditor-Sidebar-section">
              <dl className="Sidebar-items">
                <dt className="item-header">Published</dt>
                <dd className="item-vaule">
                  <i data-published={page.published} className={`fa fa-${page.published ? 'check' : 'times'}`}/>
                  <button className="item-value-btn" disabled={page.title === title.value}>
                    {page.published ? 'Unpublish' : 'Publish'}
                  </button>
                </dd>
                <dt className="item-header">Title</dt>
                <dd className="item-value">
                  <input
                    className="item-value-textInput"
                    type="text"
                    value={title.value}
                    onChange={(e) => this.editInput('title', e.target.value)}
                  />
                  <button
                    className="item-value-btn"
                    disabled={page.title === title.value}
                    onClick={() => this.savePage({title: title.value})}
                  >
                    <i className={`fa fa-${page.title === title.value ? 'check' : 'floppy-o'}`} />
                  </button>
                </dd>
                <dt className="item-header">Client</dt>
                <dd className="item-value">
                  <input
                    className="item-value-textInput"
                    type="text"
                    value={client.value}
                    onChange={(e) => this.editInput('client', e.target.value)}
                  />
                  <button
                    className="item-value-btn"
                    disabled={page.client === client.value}
                    onClick={() => this.savePage({client: client.value})}
                  >
                    <i className={`fa fa-${page.client === client.value ? 'check' : 'floppy-o'}`} />
                  </button>
                </dd>
                <dt className="item-header">Description</dt>
                <dd className="item-value">
                <input
                    className="item-value-textInput"
                    type="text"
                    value={description.value}
                    onChange={(e) => this.editInput('description', e.target.value)}
                    placeholder="Add Description"
                  />
                  <button
                    className="item-value-btn"
                    disabled={page.description === description.value}
                    onClick={() => this.savePage({description: description.value})} 
                  >
                    <i className={`fa fa-${page.description === description.value ? 'check' : 'floppy-o'}`} />
                  </button>
                </dd>
                <dt className="item-header">Listing Image</dt>
                <dd className="item-value column">
                { page.listingImage && <img src={page.listingImage.fullPath} /> }
                  <input className="item-value-fileInput" onChange={(e) => this.uploadImage({name: 'file', file: e.target.files})} type="File" />
                </dd>
                <dt className="item-header">Listing Image Small</dt>
                <dd className="item-value column">
                  { page.listingImageSmall && <img src={page.listingImageSmall.fullPath} /> }
                  <input className="item-value-fileInput" onChange={(e) => this.uploadImage({name: 'file1', file: e.target.files})} type="File" />
                </dd>
              </dl>
            </section>
          </div>
        }
        {
          (sidebar && sidebar.blockId) &&
          <button className="button-text danger" onClick={() => handleRemove(sidebar.blockId)}>Remove</button>
        }
      </section>
    )
  }
}

export default createFragmentContainer(Sidebar,
  {
    page: graphql`
      fragment Sidebar_page on Page {
        id
        title
        client
        description
        projectGoLive
        published
        listingImage {
          id
          fullPath
        }
        listingImageSmall {
          id
          fullPath
        }
      }
    `
  }
)
