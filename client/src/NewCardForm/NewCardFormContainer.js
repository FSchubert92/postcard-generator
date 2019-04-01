import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { submitCard } from '../store/actions'

const mapDispatchToProps = {
  onSubmit: submitCard,
}

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm)
