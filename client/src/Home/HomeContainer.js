import { connect } from 'react-redux'
import Home from './Home'
import { CreateCard } from '../store/actions'

const mapStateProps = (state, ownProps) => ({
  cards: state,
})

export default connect(
  mapStateProps,
  null
)(Home)
