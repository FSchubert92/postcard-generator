import React from 'react'
import styled from 'styled-components'
import testImage from '../assets/images/test-image.jpg'
import cloudy from '../assets/weather-icons/cloudy.png'
import drizzle from '../assets/weather-icons/drizzle.png'
import mist from '../assets/weather-icons/mist.png'
import rain from '../assets/weather-icons/rain.png'
import snow from '../assets/weather-icons/snow.png'
import sun from '../assets/weather-icons/sun.png'
import thunderstorm from '../assets/weather-icons/thunderstorm.png'
import wind from '../assets/weather-icons/wind.png'

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

const HowWasToday = styled.h3`
  font-size: 24px;
  padding-top: 5px;
`

const WeatherIcon = styled.img`
  width: 48px;
  height: 50px;
`

const CardBottomWrapper = styled.section`
  display: grid;
  grid-gap: 15px;
  margin: -50px 25px 0;
  padding: 12px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  background-color: white;
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
}) {
  const Stage = styled.section`
    height: 237px;
    width: 100%;
    background-image: url(${picture});
    background-size: cover;
    padding: 10px 0 0 13px;
  `

  function chooseWeatherIcon(weather) {
    console.log(weather)
    if (weather === 'Clear') {
      return sun
    }
    if (weather === 'Cloudy') {
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
        <HowWasToday>How was today?</HowWasToday>
        <div>
          <p>{summary}</p>
        </div>
        <TitleAndWeatherWrapper>
          <section>
            <h3>I ate</h3>
            <p>{iAte}</p>
          </section>
          <section>
            <WeatherIcon src={chooseWeatherIcon(weather)} alt="" />
          </section>
          <section>
            <h3>It tasted</h3>
            <p>{itTasted}</p>
          </section>
          <div>{temperatur}</div>
        </TitleAndWeatherWrapper>
      </CardBottomWrapper>
    </StyledCard>
  )
}
