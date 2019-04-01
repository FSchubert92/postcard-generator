import { createCard, removeCard, getCardsDone } from './actions'
import { getCardsFromStorage } from '../services'
import { createReducer } from 'redux-starter-kit'

export const cards = createReducer(getCardsFromStorage(), {
  [createCard]: (state, action) => [...state, action.payload],
  [getCardsDone]: (state, action) => [...action.payload],
  [removeCard]: (state, action) => {
    const card = state.find(card => card._id === action.payload._id)
    const index = state.indexOf(card)
    return [...state.slice(0, index), ...state.slice(index + 1)]
  },
})

export default {
  cards,
}
