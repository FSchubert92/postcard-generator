import React, { useState, useEffect } from 'react'
import { FormGrid, BackButton, ButtonWrapper } from './NewCardFormStyles'
import {
  SummaryInputMessage,
  DateMessage,
  FoodMessage,
  TasteMessage,
  InputMessage,
} from './NewCardFormMessages'
import { uploadImage, getLocation, getWeather } from '../services'
import uid from 'uid'
import EXIF from 'exif-js'
import LocationInput from './LocationInput'
import WeatherInput from './WeatherInput'
import LoadingOverlay from 'react-loading-overlay'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const defaultData = {
  date: '',
  summary: '',
  food: '',
  taste: '',
  pictureFile: '',
}

export default function CreateCard(props) {
  const [data, setData] = useState(defaultData)
  const [imageLocation, setImageLocation] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [isActive, setIsActive] = useState(false)
  const isDateEmpty = data.date.length > 0
  const isLocationEmpty = imageLocation.length > 0
  const isWeatherUndefined = weatherData.temperatur === undefined
  const isFoodEmpty = data.food.length > 0
  const isTasteEmpty = data.taste.length > 0

  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function onLocationInputChange(event) {
    setImageLocation(event.target.value)
  }

  function onWeatherInputChange(event) {
    setWeatherData({
      ...weatherData,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    getPictureData()
  }, [data.pictureFile])

  function onFileChange(event) {
    event.preventDefault()
    setData({ ...data, pictureFile: event.target.files[0] })
  }

  function getPictureData() {
    const picture = data.pictureFile
    let longitude = 0
    let latitude = 0
    EXIF.getData(picture, async function() {
      longitude = EXIF.getTag(this, 'GPSLongitude')
      latitude = EXIF.getTag(this, 'GPSLatitude')

      try {
        longitude = toDecimal(longitude)
        latitude = toDecimal(latitude)

        await getWeather(latitude, longitude).then(res =>
          setWeatherData({
            temperatur: Math.round(res.data.main.temp) + ' C°',
            weather: res.data.weather[0].main,
          })
        )

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

  function toDecimal(number) {
    return (
      number[0].numerator +
      number[1].numerator / (60 * number[1].denominator) +
      number[2].numerator / (3600 * number[2].denominator)
    )
  }

  function validateForm() {
    return !Object.values(data).includes('')
  }

  async function onSubmit(event) {
    event.preventDefault()
    setIsActive(true)
    let imageURL = null
    await uploadImage(data.pictureFile).then(res => {
      imageURL = res.data.url
    })
    data.location = imageLocation
    data.picture = imageURL
    data.temperatur = weatherData.temperatur
    data.weather = weatherData.weather
    data._id = uid()
    setIsActive(false)
    props.onSubmit(data)
    props.history.push('/')
  }
  console.log(isActive)
  return (
    <React.Fragment>
      <LoadingOverlay
        active={isActive}
        spinner={<ClimbingBoxLoader />}
        text="Getting your Image up to the clouds!"
        styles={{
          wrapper: {
            overflow: isActive ? 'hidden' : 'scroll',
          },
        }}
      >
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
            <InputMessage data={data} />
          </div>
          <div>
            <h3>Date</h3>
            <input onChange={onInputChange} name="date" type="date" required />
            {isDateEmpty && <DateMessage />}
          </div>
          <LocationInput
            onInputChange={onLocationInputChange}
            isLocationEmpty={isLocationEmpty}
            location={imageLocation}
          />

          <WeatherInput
            onInputChange={onWeatherInputChange}
            isWeatherUndefined={isWeatherUndefined}
            temperatur={weatherData.temperatur}
            weather={weatherData.weather}
          />
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
            <SummaryInputMessage data={data} />
          </div>
          <div>
            <h3>Today I ate</h3>
            <input onChange={onInputChange} name="food" type="text" required />
            {isFoodEmpty && <FoodMessage />}
          </div>
          <div>
            <h3>It tasted</h3>
            <input onChange={onInputChange} name="taste" type="text" required />
            {isTasteEmpty && <TasteMessage />}
          </div>
          <ButtonWrapper>
            <BackButton to="/">X</BackButton>
            <button>OK!</button>
          </ButtonWrapper>
        </FormGrid>
      </LoadingOverlay>
    </React.Fragment>
  )
}
