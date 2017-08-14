// @flow
import React, { PureComponent } from 'react'
import MetaList from '~/modules/components/MetaList'
import CreditsSidebar from './CreditsSidebar.js'
import { TEXTCOLOR } from './constants.js'
import './Credits.style.scss'

type MetaType = {
  heading: string,
  text: string
}

type DisplayProps = {
  canEdit: boolean,
  meta: Array<MetaType>,
  editor: Object,
  update: () => void
}

type State = {
  meta: MetaType,
  editMode: {
    meta: null | number
  }
}
type Props = DisplayProps

class Credits extends PureComponent {
  props: Props
  state: State
  handleMetaChange: () => void
  addMeta: () => void
  handleMetaRemove: () => void
  onChange: () => void
  static defaultProps = {
    data: {
      meta: []
    },
    canEdit: false
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        meta: null
      }
    }
    this.handleBackgroundColor = this.handleBackgroundColor.bind(this)
  }

  componentDidUpdate () {
    const options = {editor: this.state.editor}
    this.handleSidebarElement(options)
  }

  update = (meta: Array<MetaType>) => {
    this.setState({
      meta: {
        heading: '',
        text: ''
      },
      editMode: {
        meta: null
      }
    }, () => this.props.update({ ...this.props.data, meta }))
  }

  handleSidebarElement (options = {}) {
    if (this.props.canEdit) {
      this.props.setSidebar(this.renderSidebar(options))
    }
  }

  handleBackgroundColor (color) {
    this.props.update({meta: this.props.data.meta, backgroundColor: color.hex})
  }

  renderSidebar (options) {
    const { backgroundColor, meta } = this.props.data
    const { editorState } = this.state
    return (
      <CreditsSidebar
        backgroundColor={backgroundColor}
        onChangeComplete={this.handleBackgroundColor}
        meta={meta}
        updateMeta={this.update}
        >
      </CreditsSidebar>
    )
  }

  render () {
    const { backgroundColor = '#EFEFEF', meta } = this.props.data

    return (
      <section className="Credits container" onClick={() => this.handleSidebarElement({editor: false})} style={{backgroundColor, color: TEXTCOLOR[backgroundColor.toLowerCase()]}}>
        <div className="row Credits-row">
          <div className="col-lg-6">
            <h3>Credits</h3>
          </div>
          <div className="col-lg-6">
            <MetaList meta={meta} update={this.update}/>
          </div>
        </div>
      </section>
    )
  }
}

export default Credits
