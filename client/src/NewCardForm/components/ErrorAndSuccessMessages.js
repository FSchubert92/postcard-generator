import React from 'react'
import { ErrorMessage, Message } from '../styles'

export function SummaryInputMessage(props) {
  const summaryLength = 260 - props.data.summary.length

  if (summaryLength < 0) {
    return (
      <ErrorMessage>
        Oh! Try to keep yourself a little shorter. The maximum input length is
        260 characters. Ask yourself: What was your highest high today?
      </ErrorMessage>
    )
  } else if (summaryLength > 0) {
    return (
      <Message>
        Thank you! Please describe your day in up to 260 characters!
      </Message>
    )
  } else {
    return null
  }
}

export function DateMessage() {
  return <Message> That surley was a great Day wasn't it?</Message>
}

export function LocationMessage() {
  return <Message> What a great place! </Message>
}

export function WeatherMessage() {
  return (
    <ErrorMessage>
      No weather has been either found or entered. How about entering it
      yourself?
    </ErrorMessage>
  )
}

export function FoodMessage() {
  return <Message> Cool! Was it delicious? </Message>
}

export function TasteMessage() {
  return <Message> Thank you for the info</Message>
}

export function InputMessage(props) {
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
