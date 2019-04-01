import React, { useState, useEffect } from 'react'
import uid from 'uid'
import EXIF from 'exif-js'
import LoadingOverlay from 'react-loading-overlay'
import LocationInput from './components/LocationInput'
import WeatherInput from './components/WeatherInput'
import { FormGrid, BackButton, ButtonWrapper } from './styles'
import {
  SummaryInputMessage,
  DateMessage,
  FoodMessage,
  TasteMessage,
  InputMessage,
} from './components/ErrorAndSuccessMessages'
import {
  uploadImage,
  getLocation,
  getWeather,
  setAuthHeader,
} from '../services'
import { ReactComponent as ImagePlaceholder } from '../assets/form-icons/image-placeholder.svg'

const defaultData = {
  date: '',
  summary: '',
  food: '',
  taste: '',
  pictureFile: '',
}

export default function CreateCard(props) {
  console.log(props)
  const [data, setData] = useState(defaultData)
  const [imageLocation, setImageLocation] = useState('')
  const [weatherData, setWeatherData] = useState({
    weather: 'Clear',
    temperature: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const isDateEmpty = data.date.length > 0
  const isLocationEmpty = imageLocation.length > 0
  const isWeatherUndefined = weatherData.temperature === undefined
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

        let res = await getWeather(latitude, longitude)
        setWeatherData({
          temperature: Math.round(res.data.main.temp) + ' C°',
          weather: res.data.weather[0].main,
        })

        res = await getLocation(latitude, longitude)
        setImageLocation(
          res.data.address.city ||
            res.data.address.village ||
            res.data.address.country
        )
        setAuthHeader(props.setAuth)
      } catch (error) {
        setData({ ...data, autoImage: false })
        console.log(error)
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
    return (
      !Object.values(data).includes('') &&
      !Object.values(weatherData).includes('') &&
      !Object.values(imageLocation).includes('')
    )
  }

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    let imageURL = null
    const res = await uploadImage(data.pictureFile)
    imageURL = res.data.url
    setAuthHeader(props.setAuth)
    data.user = 'flo'
    data.location = imageLocation
    data.picture = imageURL
    data.temperature = weatherData.temperature
    data.weather = weatherData.weather
    data._id = uid()

    setIsLoading(false)
    props.onSubmit(data)
    props.history.push('/home')
  }

  return (
    <React.Fragment>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Getting your Image up to the clouds!"
        styles={{
          wrapper: {
            overflow: isLoading ? 'hidden' : 'scroll',
          },
        }}
      >
        <FormGrid checkForEmptyFields={validateForm()} onSubmit={onSubmit}>
          <h2>New Card</h2>
          <div className={'file-input-wrapper'}>
            <h3>Image</h3>
            <input
              onChange={onFileChange}
              type="file"
              required
              accept="image/jpeg"
              id="picture"
            />
            <label htmlFor="picture">
              {data.pictureFile === '' ? (
                <ImagePlaceholder />
              ) : (
                <img
                  width="280px"
                  height="200px"
                  src={URL.createObjectURL(data.pictureFile)}
                  alt=""
                />
              )}
            </label>
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
            required
          />
          <WeatherInput
            onInputChange={onWeatherInputChange}
            isWeatherUndefined={isWeatherUndefined}
            temperature={weatherData.temperature}
            weather={weatherData.weather}
            required
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
            <div>{data.summary.length}/260</div>
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
            <BackButton to="/home">X</BackButton>
            <button>OK!</button>
          </ButtonWrapper>
        </FormGrid>
      </LoadingOverlay>
    </React.Fragment>
  )
}
