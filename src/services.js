import axios from 'axios'

const cardsPath = 'http://localhost:4000/cards'
export function getAllCards() {
  return axios.get(cardsPath)
}

export function postNewCard(card) {
  return axios.post(cardsPath, card)
}

export function toggleCardBookmark(card) {
  return axios.patch(`${cardsPath}/${card._id}`, {
    bookmarked: !card.bookmarked,
  })
}
export function deleteCardFromServer(card) {
  return axios.delete(`${cardsPath}/${card._id}`)
}

export function getCardsFromStorage() {
  return getFromStorage('cards') || []
}

export function saveCardsToStorage(cards) {
  saveToStorage('cards', cards)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}
export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}
