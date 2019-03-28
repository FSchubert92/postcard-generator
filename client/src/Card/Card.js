import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cloudy from '../assets/weather-icons/cloudy.png'
import drizzle from '../assets/weather-icons/drizzle.png'
import mist from '../assets/weather-icons/mist.png'
import rain from '../assets/weather-icons/rain.png'
import snow from '../assets/weather-icons/snow.png'
import sun from '../assets/weather-icons/sun.png'
import thunderstorm from '../assets/weather-icons/thunderstorm.png'
import wind from '../assets/weather-icons/wind.png'
import SwipeableViews from 'react-swipeable-views'
import Pagination from './components/Pagination'
import {
  StyledCard,
  DateHeadline,
  LocationHeadline,
  CardBottomWrapper,
  HeadlineAndButtonWrapper,
  HowWasToday,
  DeleteButton,
  WeatherContainer,
  WeatherIcon,
} from './styles'

Card.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  temperature: PropTypes.string,
  weather: PropTypes.string,
  picture: PropTypes.string,
  summary: PropTypes.string,
  iAte: PropTypes.string,
  itTasted: PropTypes.string,
}

export default function Card({
  date,
  location,
  temperature,
  weather,
  picture,
  summary,
  iAte,
  itTasted,
  onDelete,
}) {
  const Stage = styled.section`
    height: 237px;
    width: 100%;
    background-image: url(${picture});
    background-size: cover;
    padding: 10px 0 0 13px;
  `

  const [index, setIndex] = useState(0)

  function handleChangeIndex(index) {
    setIndex(index)
  }

  function chooseWeatherIcon(weather) {
    if (weather === 'Clear') {
      return sun
    }
    if (weather === 'Clouds') {
      return cloudy
    }
    if (weather === 'Drizzle') {
      return drizzle
    }
    if (weather === 'Mist') {
      return mist
    }
    if (weather === 'Rain') {
      return rain
    }
    if (weather === 'Snow') {
      return snow
    }
    if (weather === 'Thunderstorm') {
      return thunderstorm
    }
    if (weather === 'Wind') {
      return wind
    }
  }
  return (
    <StyledCard data-cy="single-card">
      <DateHeadline>{date}</DateHeadline>
      <Stage>
        <LocationHeadline>{location}</LocationHeadline>
      </Stage>
      <CardBottomWrapper>
        <HeadlineAndButtonWrapper>
          <HowWasToday>How was today?</HowWasToday>
          <div>
            <DeleteButton onClick={onDelete}>X</DeleteButton>
          </div>
        </HeadlineAndButtonWrapper>
        <SwipeableViews onChangeIndex={handleChangeIndex}>
          <div>
            <p>{summary}</p>
          </div>
          <div>
            <h3>I ate</h3>
            <p>{iAte}</p>
            <h3>It tasted</h3>
            <p>{itTasted}</p>
          </div>
          <WeatherContainer>
            <WeatherIcon src={chooseWeatherIcon(weather)} alt={weather} />
            <p>{temperature}</p>
          </WeatherContainer>
        </SwipeableViews>
        <Pagination index={index} />
      </CardBottomWrapper>
    </StyledCard>
  )
}
