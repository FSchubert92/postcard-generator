import { connect } from 'react-redux'
import Home from './Home'
import { getCards, deleteCard } from '../store/actions'

const mapStateProps = (state, ownProps) => ({
  ...state,
})

const mapDispatchToProps = {
  getCards,
  onDelete: deleteCard,
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Home)
