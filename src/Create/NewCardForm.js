import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { uploadImage, getLocation, getWeather } from '../services'
import uid from 'uid'
import EXIF from 'exif-js'

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
  padding-bottom: 10px;
  box-shadow: 0;
`

const ErrorMessage = styled.p`
  color: crimson;
`

const Message = styled.p`
  color: #333;
`

const DropDownMenu = styled.select`
  border: 2px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  font-size: 1em;
`

const defaultData = {
  date: '',
  summary: '',
  food: '',
  taste: '',
}

export default function CreateCard(props) {
  const [imageLocation, setImageLocation] = useState('')
  const [data, setData] = useState(defaultData)

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
    console.log(data)
  }

  function onLocationInputChange(event) {
    setImageLocation(event.target.value)
  }

  function validateForm() {
    return !Object.values(data).includes('')
  }

  function toDecimal(number) {
    return (
      number[0].numerator +
      number[1].numerator / (60 * number[1].denominator) +
      number[2].numerator / (3600 * number[2].denominator)
    )
  }

  function onFileChange(event) {
    event.preventDefault()
    let longitude = 0
    let latitude = 0
    const picture = event.target.files[0]
    setData({ ...data, pictureFile: event.target.files[0] })

    EXIF.getData(picture, async function() {
      longitude = EXIF.getTag(this, 'GPSLongitude')
      latitude = EXIF.getTag(this, 'GPSLatitude')

      try {
        longitude = toDecimal(longitude)
        latitude = toDecimal(latitude)

        // await getWeather(latitude, longitude).then(res =>
        //   setData({
        //     ...data,
        //     temperatur: Math.round(res.data.main.temp) + ' C°',
        //     weather: res.data.weather[0].main,
        //   })
        // )

        await getLocation(latitude, longitude).then(res =>
          setImageLocation(
            res.data.address.city ||
              res.data.address.village ||
              res.data.address.country
          )
        )
      } catch (error) {
        setData({ ...data, autoImage: false })
      }
    })
  }

  async function onSubmit(event) {
    event.preventDefault()
    let imageURL = null

    await uploadImage(data.pictureFile).then(res => {
      console.log(data.pictureFile)
      imageURL = res.data.url
    })

    data.location = imageLocation
    data.picture = imageURL
    data.id = uid()
    props.onSubmit(data)
    props.history.push('/')
  }

  const summaryLength = 260 - data.summary.length
  const dateLength = data.date.length > 0
  const locationLength = imageLocation.length > 0
  const foodLength = data.food.length > 0
  const tasteLength = data.taste.length > 0

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

  function InputMessage() {
    if (data.autoImage === false) {
      return (
        <ErrorMessage>
          Oh no! No location could be found! Please enter one by yourself!
        </ErrorMessage>
      )
    } else {
      return (
        <Message>
          Upload a JPG- Picture. The App will try to get the place where the
          Image has been taken automatically.
        </Message>
      )
    }
  }

  return (
    <React.Fragment>
      <FormGrid checkForEmptyFields={validateForm()} onSubmit={onSubmit}>
        <h2>New Card</h2>
        <div>
          <h3>Image</h3>
          <input
            onChange={onFileChange}
            type="file"
            required
            accept="image/jpeg"
          />
          <InputMessage />
        </div>
        <div>
          <h3>Date</h3>
          <input onChange={onInputChange} name="date" type="date" required />
          <DateMessage />
        </div>
        <div>
          <h3>Location</h3>
          <input
            onChange={onLocationInputChange}
            name="location"
            type="text"
            placeholder="Where have you been"
            value={imageLocation}
          />
          <LocationMessage />
        </div>
        <div>
          <h3>Weather</h3>
          <input
            onChange={onInputChange}
            name="temperatur"
            type="text"
            placeholder="Temperatur in C°"
            value={data.temperatur}
          />
          <label>
            Choose the weather condition
            <DropDownMenu
              name="weather"
              size="1"
              value={data.weather}
              onChange={onInputChange}
            >
              <option>Clear</option>
              <option>Clouds</option>
              <option> Snow</option>
              <option> Rain</option>
              <option> Drizzle</option>
              <option> Thunderstorm</option>
            </DropDownMenu>
          </label>
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

        <ButtonWrapper>
          <BackButton to="/">X</BackButton>
          <button>OK!</button>
        </ButtonWrapper>
      </FormGrid>
    </React.Fragment>
  )
}
