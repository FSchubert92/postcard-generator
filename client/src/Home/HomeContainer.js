import { connect } from 'react-redux'
import Home from './Home'
import { toggleBookmark } from '../store/actions'

const mapStateProps = (state, ownProps) => ({
  ...state,
})

const mapDispatchToProps = {
  onBookmark: toggleBookmark,
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Home)
