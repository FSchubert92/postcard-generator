import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { createCard, getCards, submitCard } from '../store/actions'

const mapDispatchToProps = {
  onSubmit: submitCard,
  getCards,
}

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm)
