import { createAction } from 'redux-starter-kit'
import { getAllCards, postNewCard, deleteCardFromServer } from '../services'

export const CREATE_CARD = 'CREATE_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const GET_CARDS_DONE = 'GET_CARDS_DONE'

export const createCard = createAction(CREATE_CARD)
export const removeCard = createAction(REMOVE_CARD)
export const getCardsDone = createAction(GET_CARDS_DONE)

export const submitCard = card => dispatch => {
  postNewCard(card).then(card => {
    dispatch(createCard(card.data))
  })
}

export const deleteCard = card => dispatch => {
  deleteCardFromServer(card).then(card => {
    dispatch(removeCard(card.data))
  })
}

export const getCards = user => dispatch => {
  getAllCards(user).then(cards => {
    dispatch(getCardsDone(cards.data))
  })
}
