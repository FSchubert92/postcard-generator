import { createAction } from 'redux-starter-kit'

export const CREATE_CARD = 'CREATE_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

export const createCard = createAction(CREATE_CARD)
export const removeCard = createAction(REMOVE_CARD)
