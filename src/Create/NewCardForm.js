import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: 48px repeat(7, auto);
  margin: 20px;
  padding-bottom: 55px;
  grid-gap: 50px;
  overflow-y: scroll;

  input,
  textarea {
    border: ${p =>
      p.isSomethingEmpty ? '1px solid #18B839' : '2px solid #ddd'};
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
    background: ${p => (p.isSomethingEmpty ? '#18B839' : '#333')};
    color: ${p => (p.isSomethingEmpty ? 'white' : '#333')};
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
    if (
      data.date.length > 0 &&
      data.location.length > 0 &&
      data.picture.length > 0 &&
      data.summary.length > 0 &&
      data.food.length > 0 &&
      data.taste.length > 0
    ) {
      return true
    } else {
      return false
    }
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
  }

  return (
    <FormGrid isSomethingEmpty={validateForm()} onSubmit={onSubmit}>
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
          maxLength="260"
          placeholder="Summarize what you did today"
          required
        />
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
