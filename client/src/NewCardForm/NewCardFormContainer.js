import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { createCard, getCards } from '../store/actions'

const mapDispatchToProps = {
  onSubmit: createCard,
  getCards,
}

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm)
