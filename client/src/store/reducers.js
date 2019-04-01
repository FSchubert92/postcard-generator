import { createCard, removeCard, getCardsDone } from './actions'
import { getCardsFromStorage } from '../services'
import { createReducer } from 'redux-starter-kit'

export const cards = createReducer(getCardsFromStorage(), {
  [createCard]: (state, action) => [...state, action.payload],
  [getCardsDone]: (state, action) => [...state, action.payload],
  [removeCard]: (state, action) =>
    state.filter((card, index) => index !== action.payload),
})

export default {
  cards,
}
