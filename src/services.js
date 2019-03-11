import React, { useState } from 'react'
import axios from 'axios'
import uid from 'uid'
import testImage from './assets/images/test-image.jpg'

const cardsPath = 'http://localhost:4000/cards'
export function getAllCards() {
  return axios.get(cardsPath)
}
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export function uploadImage(picture) {
  console.log(picture)
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

  const formData = new FormData()
  formData.append('file', picture)
  formData.append('upload_preset', PRESET)

  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
  // .then(onImageSave)
  // .catch(err => console.error(err))
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
  return (
    getFromStorage('cards') || [
      {
        date: '',
        location: '',
        temperatur: '20C°',
        picture: testImage,
        summary: '',
        food: '',
        taste: '',
        id: uid(),
      },
    ]
  )
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
