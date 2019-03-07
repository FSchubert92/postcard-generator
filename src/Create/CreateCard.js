import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import testImage from '../assets/images/test-image.jpg'

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: 48px repeat(7, auto);
  margin: 20px;
  padding-bottom: 55px;
  overflow-y: scroll;

  input,
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  input[type='file'] {
    padding: 0;
  }
  button {
    position: fixed;
    bottom: 9px;
    left: 41%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  }
  .input-summary {
    height: 100px;
  }
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
  function onSubmit(event) {
    event.preventDefault()
    props.onSubmit(data)
    /*setData(defaultData)*/
    props.history.push('/')
  }

  function fileSelectedHandler(event) {
    setData({ ...data, picture: URL.createObjectURL(event.target.files[0]) })
    console.log(data)
  }

  return (
    <FormGrid onSubmit={onSubmit}>
      <h2>New Card</h2>
      <div>
        <h3>Date</h3>
        <input onChange={onInputChange} name="date" type="date" />
      </div>
      <div>
        <h3>Location</h3>
        <input
          onChange={onInputChange}
          name="location"
          type="text"
          placeholder="Where have you been "
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
        />
      </div>

      <div>
        <h3>Today I ate</h3>
        <input onChange={onInputChange} name="food" type="text" />
      </div>
      <div>
        <h3>It tasted</h3>
        <input onChange={onInputChange} name="taste" type="text" />
      </div>
      <div>
        <h3>Image</h3>
        <input type="file" onChange={fileSelectedHandler} />
      </div>
      <button>OK!</button>
    </FormGrid>
  )
}
