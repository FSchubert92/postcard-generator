import React from 'react'
import styled from 'styled-components'
import testImage from '../assets/images/test-image.jpg'
import WeatherIconSun from '../assets/images/weatherIconSun.png'

const StyledCard = styled.section`
  p {
    margin: 2px 0 0 4px;
  }
`
const Stage = styled.section`
  height: 237px;
  width: 100%;
  background-image: url(${testImage});
  background-size: cover;
  padding: 10px 0 0 13px;
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
  margin: -50px 25px;
  padding: 12px;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 50%);
  background-color: white;
`
export default function Card() {
  return (
    <StyledCard>
      <DateHeadline> H2 Title</DateHeadline>
      <Stage>
        <LocationHeadline>H2 Title</LocationHeadline>
      </Stage>
      <CardBottomWrapper>
        <TitleAndWeatherWrapper>
          <HowWasToday>How was today?</HowWasToday>
          <div>
            <WeatherIcon src={WeatherIconSun} alt="" />
            20 C°
          </div>
        </TitleAndWeatherWrapper>
        <div>
          <h3>Summary of the day</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            molestias saepe quod ab pariatur deleniti harum reprehenderit
            assumenda porro soluta, deserunt cum tempora error, libero, tenetur
            rem! Beatae, harum excepturi.
          </p>
        </div>
        <section>
          <h3>I ate</h3>
          <p>Lorem Ipsum</p>
        </section>
        <section>
          <h3>It tasted</h3>
          <p>Lorem Ipsum</p>
        </section>
      </CardBottomWrapper>
    </StyledCard>
  )
}
