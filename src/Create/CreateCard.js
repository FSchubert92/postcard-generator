import React, { useState } from 'react'
import styled from 'styled-components'
const FormGrid = styled.form`
  display: grid;
  height: 100%;
  grid-template-rows: 48px repeat(5, auto);
  margin: 20px;
  padding-bottom: 55px;

  input,
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }

  .input-summary {
    height: 100px;
  }
`
const defaultData = {
  title: '',
  content: '',
  tags: '',
}

export default function CreateCard() {
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <FormGrid>
      <h2>New Card</h2>
      <div>
        <h3>Date</h3>
        <input name="input-date" type="date" />
      </div>
      <div>
        <h3>Location</h3>
        <input
          name="input-location"
          type="text"
          placeholder="Where have you been "
        />
      </div>
      <div>
        <h3>Summarize your day</h3>
        <textarea
          name="input-summary"
          className={'input-summary'}
          maxLength="260"
          placeholder="Summarize what you did today"
        />
      </div>

      <div>
        <h3>Today I ate</h3>
        <input name="input-food" type="text" />
      </div>
      <div>
        <h3>It tasted</h3>
        <input name="taste" type="text" />
      </div>
    </FormGrid>
  )
}
