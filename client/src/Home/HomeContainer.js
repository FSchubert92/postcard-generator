import { connect } from 'react-redux'
import Home from './Home'
import { createCard } from '../store/actions'

const mapStateProps = (state, ownProps) => ({
  ...state,
})

export default connect(
  mapStateProps,
  null
)(Home)
