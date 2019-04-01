import { connect } from 'react-redux'
import Home from './Home'
import { getCards } from '../store/actions'

const mapStateProps = (state, ownProps) => ({
  ...state,
})

const mapDispatchToProps = {
  getCards,
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Home)
