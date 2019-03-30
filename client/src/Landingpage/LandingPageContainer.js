import { connect } from 'react-redux'
import LandingPage from './LandingPage'

const mapStateProps = (state, ownProps) => ({})

export default connect(
  mapStateProps,
  mapDispatchToProps
)(LandingPage)
