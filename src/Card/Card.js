import React from 'react'
import styled from 'styled-components'
import testImage from '../assets/images/test-image.jpg'
import WeatherIconSun from '../assets/images/weatherIconSun.png'

const StyledCard = styled.section`
  p {
    margin: 2px 0 0 4px;
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
  height: 61px;
  grid-template-columns: 1fr 48px;
`

const HowWasToday = styled.h2`
  padding-top: 5px;
  margin-bottom: 28px;
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

  return (
    <StyledCard data-cy="single-card">
      <DateHeadline>{date}</DateHeadline>
      <Stage>
        <LocationHeadline>{location}</LocationHeadline>
      </Stage>
      <CardBottomWrapper>
        <TitleAndWeatherWrapper>
          <HowWasToday>How was today?</HowWasToday>
          <section>
            <WeatherIcon src={WeatherIconSun} alt="" />
            {temperatur}
          </section>
        </TitleAndWeatherWrapper>
        <div>
          <h3>Summary of the day</h3>
          <p>{summary}</p>
        </div>
        <section>
          <h3>I ate</h3>
          <p>{iAte}</p>
        </section>
        <section>
          <h3>It tasted</h3>
          <p>{itTasted}</p>
        </section>
      </CardBottomWrapper>
    </StyledCard>
  )
}
