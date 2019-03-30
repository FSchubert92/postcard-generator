import { createAction } from 'redux-starter-kit'

export const CREATE_CARD = 'CREATE_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'

export const createCard = createAction(CREATE_CARD)
export const removeCard = createAction(REMOVE_CARD)
export const toggleBookmark = createAction(TOGGLE_BOOKMARK)
