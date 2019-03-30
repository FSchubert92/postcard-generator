import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { createCard } from '../store/actions'

const mapDispatchToProps = (state, ownProps) => ({
  onSubmit: createCard,
})

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm)
