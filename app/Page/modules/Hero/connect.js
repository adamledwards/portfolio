// @flow
import { connect } from 'react-redux'
import Hero from './Hero'
import type { State } from '~/utils/store.js'

const mapStateToProps = ({blocks}: State) => ({
  blocks
})

export default connect(mapStateToProps)(Hero)
