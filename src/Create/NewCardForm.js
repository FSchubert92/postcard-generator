import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: 48px repeat(7, auto);
  margin: 20px;
  grid-gap: 50px;
  overflow-y: scroll;
  padding: 0 5px;

  div {
    padding: 5px;
    box-shadow: 2px 1px 12px 0px rgba(0, 0, 0, 50%);
  }

  input,
  textarea {
    border: ${p =>
      p.checkForEmptyFields ? '1px solid #18B839' : '2px solid #ddd'};
    padding: 10px;
    margin: 10px 0;
    &:focus {
      outline: 3px solid lightgreen;
    }
  }

  input[type='file'] {
    padding: 0;
    width: 315px;
  }
  button {
    background: ${p => (p.checkForEmptyFields ? '#18B839' : '#333')};
    color: ${p => (p.checkForEmptyFields ? 'white' : '#333')};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
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
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 45px;
`
const ErrorMessage = styled.p`
  color: crimson;
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
    console.log(!Object.values(data).includes(''))
  }
  function validateForm() {
    return !Object.values(data).includes('')
  }

  function onSubmit(event) {
    event.preventDefault()
    validateForm()
    props.onSubmit(data)
    /*setData(defaultData)*/
    props.history.push('/')
  }

  function fileSelectedHandler(event) {
    setData({ ...data, picture: URL.createObjectURL(event.target.files[0]) })
    console.log(data)
    validateForm()
  }

  const summaryLength = 260 - data.summary.length

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

  return (
    <FormGrid checkForEmptyFields={validateForm()} onSubmit={onSubmit}>
      <h2>New Card</h2>
      <div>
        <h3>Date</h3>
        <input onChange={onInputChange} name="date" type="date" required />
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
      </div>
      <div>
        <h3>It tasted</h3>
        <input onChange={onInputChange} name="taste" type="text" required />
      </div>
      <div>
        <h3>Image</h3>
        <input
          type="file"
          onChange={fileSelectedHandler}
          required
          accept="image/x-png,image/gif,image/jpeg"
        />
      </div>
      <ButtonWrapper>
        <BackButton to="/">X</BackButton>
        <button>OK!</button>
      </ButtonWrapper>
    </FormGrid>
  )
}
