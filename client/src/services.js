import axios from 'axios'
import jwt_decode from 'jwt-decode'
const usersPath = 'http://localhost:4000/users'
const cardsPath = 'cards'

export function getAllCards() {
  return axios.get(cardsPath)
}

export function getLocation(lat, long) {
  const TOKEN = process.env.REACT_APP_LOCATIONIQ_TOKEN
  const url = `https://eu1.locationiq.com/v1/reverse.php?key=${TOKEN}&lat=${lat}&lon=${long}&format=json`
  delete axios.defaults.headers.common['Authorization']
  return axios.get(url)
}

export function uploadImage(picture) {
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
  const formData = new FormData()

  formData.append('file', picture)
  formData.append('upload_preset', PRESET)
  delete axios.defaults.headers.common['Authorization']

  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
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

export function getWeather(lat, long) {
  const KEY = process.env.REACT_APP_WEATHER_KEY
  const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${KEY}`
  return axios.get(url)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}

export function registerUser(userData) {
  return axios.post('api/users/register', userData)
}

export function loginUser(userData) {
  return axios.post('api/users/login', userData)
}

export function logoutUser(setAuth) {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  setAuth({ user: {}, isAuthenticated: false })
}

export function setCurrentUser(decoded, setAuth) {
  setAuth({ user: decoded, isAuthenticated: true })
}

export function setAuthToken(token) {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization']
  }
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function setAuthHeader(setAuth) {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    setCurrentUser(decoded, setAuth)

    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      logoutUser(setAuth)
      window.location.href = '/login'
    }
  }
}
