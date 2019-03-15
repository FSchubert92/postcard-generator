import React from 'react'
import { ErrorMessage, Message } from './NewCardFormStyles'

export function SummaryInputMessage(props) {
  const summaryLength = 260 - props.data.summary.length

  if (summaryLength < 0) {
    return (
      <ErrorMessage>
        Oh! Try to keep yourself a little shorter. The maximum input length is
        260 characters. Ask yourself: What was your highest high today?
      </ErrorMessage>
    )
  } else {
    return null
  }
}

export function DateMessage(props) {
  const dateLength = props.data.date.length > 0
  if (dateLength > 0) {
    return <Message> Thank you very much!</Message>
  } else {
    return null
  }
}

export function LocationMessage(props) {
  console.log(props)
  const locationLength = props.imageLocation.length > 0

  if (locationLength > 0) {
    return <Message> Thank you very much!</Message>
  } else {
    return null
  }
}

export function FoodMessage(props) {
  const foodLength = props.data.food.length > 0

  if (foodLength > 0) {
    return <Message> Thank you very much!</Message>
  } else {
    return null
  }
}

export function TasteMessage(props) {
  const tasteLength = props.data.taste.length > 0

  if (tasteLength > 0) {
    return <Message> Thank you very much!</Message>
  } else {
    return null
  }
}

export function InputMessage(props) {
  console.log(props)
  if (props.data.autoImage === false) {
    return (
      <ErrorMessage>
        Oh no! No location could be found! Please enter one by yourself!
      </ErrorMessage>
    )
  } else {
    return (
      <Message>
        Upload a JPG- Picture. The App will try to get the place where the Image
        has been taken automatically.
      </Message>
    )
  }
}
