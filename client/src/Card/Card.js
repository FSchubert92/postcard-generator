import React from 'react'
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

const StyledCard = styled.section`
  p {
    margin: 2px 0 0 0px;
  }
`

const DateHeadline = styled.h2`
  margin-left: 13px;
  margin-bottom: 5px;
`

const LocationHeadline = styled.h2`
  color: white;
  text-shadow: 0 2px 14px black;
`

const TitleAndWeatherWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 48px;
`
const HeadlineAndButtonWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 48px;
`

const HowWasToday = styled.h3`
  padding-top: 5px;
  font-size: 24px;
`

const WeatherIcon = styled.img`
  width: 48px;
`

const CardBottomWrapper = styled.section`
  display: grid;
  grid-gap: 15px;
  margin: -50px 25px 0;
  padding: 12px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  background-color: white;
`

const DeleteButton = styled.button`
  display: flex;
  height: 20px;
  width: 20px;
  background-color: white;
  color: crimson;
  border-width: 0;
  font-size: 2em;
  border-radius: 0;
  margin: 0 auto;
`

export default function Card({
  date,
  location,
  temperatur,
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
        <SwipeableViews>
          <div>
            <p>{summary}</p>
          </div>
          <TitleAndWeatherWrapper>
            <section>
              <h3>I ate</h3>
              <p>{iAte}</p>
            </section>
            <section>
              <WeatherIcon src={chooseWeatherIcon(weather)} alt={weather} />
            </section>
            <section>
              <h3>It tasted</h3>
              <p>{itTasted}</p>
            </section>
            <div>{temperatur}</div>
          </TitleAndWeatherWrapper>
        </SwipeableViews>
      </CardBottomWrapper>
    </StyledCard>
  )
}
