import { connect } from 'react-redux'
import NewCardForm from './NewCardForm'
import { CreateCard } from '../store/actions'

const mapDispatchToProps = (state, ownProps) => ({
  onSubmit: CreateCard,
})

export default connect(
  null,
  mapDispatchToProps
)(NewCardForm)
