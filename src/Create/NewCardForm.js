import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: repeat(7, auto);
  margin: 20px;
  grid-gap: 50px;
  overflow-y: scroll;
  padding: 0 5px;

  div {
    padding: 5px;
    box-shadow: ${p =>
      p.checkForEmptyFields
        ? '2px 1px 13px 2px #13a513'
        : '2px 1px 12px 0px rgba(0, 0, 0, 10%)'};
  }

  input,
  textarea {
    border: 2px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    width: 90%;
  }

  input[type='file'] {
    padding: 0;
    width: 315px;
  }

  button {
    background: ${p => (p.checkForEmptyFields ? '#18B839' : '#333')};
    color: ${p => (p.checkForEmptyFields ? 'white' : '#333')};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
    border-radius: 50%;
    height: 44px;
    width: 44px;
  }

  .input-summary {
    height: 100px;
  }
`

const BackButton = styled(NavLink)`
  background-color: crimson;
  color: white;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
  bottom: 9px;
  left: 27px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  padding: 3px;
`

const ButtonWrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 45px;
  box-shadow: 0;
`

const ErrorMessage = styled.p`
  color: crimson;
`

const Message = styled.p`
  color: #333;
`

const defaultData = {
  date: '',
  location: '',
  picture: '',
  summary: '',
  food: '',
  taste: '',
}

export default function CreateCard(props) {
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function validateForm() {
    return !Object.values(data).includes('')
  }

  function fileSelectedHandler(event) {
    setData({ ...data, picture: URL.createObjectURL(event.target.files[0]) })
    validateForm()
  }

  function onSubmit(event) {
    event.preventDefault()
    validateForm()
    props.onSubmit(data)
    setData(defaultData)
    props.history.push('/')
  }

  const summaryLength = 260 - data.summary.length
  const dateLength = data.date.length > 0
  const locationLength = data.location.length > 0
  const foodLength = data.food.length > 0
  const tasteLength = data.taste.length > 0
  const pictureLength = data.picture.length

  function SummaryInputMessage() {
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

  function DateMessage() {
    if (dateLength > 0) {
      return <Message> Thank you very much!</Message>
    } else {
      return null
    }
  }

  function LocationMessage() {
    if (locationLength > 0) {
      return <Message> Thank you very much!</Message>
    } else {
      return null
    }
  }

  function FoodMessage() {
    if (foodLength > 0) {
      return <Message> Thank you very much!</Message>
    } else {
      return null
    }
  }

  function TasteMessage() {
    if (tasteLength > 0) {
      return <Message> Thank you very much!</Message>
    } else {
      return null
    }
  }

  function PictureMessage() {
    if (pictureLength > 0) {
      return <Message> Thank you very much!</Message>
    } else {
      return null
    }
  }

  return (
    <FormGrid checkForEmptyFields={validateForm()} onSubmit={onSubmit}>
      <h2>New Card</h2>
      <div>
        <h3>Date</h3>
        <input onChange={onInputChange} name="date" type="date" required />
        <DateMessage />
      </div>
      <div>
        <h3>Location</h3>
        <input
          onChange={onInputChange}
          name="location"
          type="text"
          placeholder="Where have you been"
          required
        />
        <LocationMessage />
      </div>
      <div>
        <h3>Summarize your day</h3>
        <textarea
          onChange={onInputChange}
          name="summary"
          className={'input-summary'}
          maxLength="280"
          placeholder="Summarize what you did today"
          required
        />
        <SummaryInputMessage />
      </div>
      <div>
        <h3>Today I ate</h3>
        <input onChange={onInputChange} name="food" type="text" required />
        <FoodMessage />
      </div>
      <div>
        <h3>It tasted</h3>
        <input onChange={onInputChange} name="taste" type="text" required />
        <TasteMessage />
      </div>
      <div>
        <h3>Image</h3>
        <input
          type="file"
          onChange={fileSelectedHandler}
          required
          accept="image/x-png,image/gif,image/jpeg"
        />
        <PictureMessage />
      </div>
      <ButtonWrapper>
        <BackButton to="/">X</BackButton>
        <button>OK!</button>
      </ButtonWrapper>
    </FormGrid>
  )
}
