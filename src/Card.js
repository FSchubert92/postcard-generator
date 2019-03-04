import React, { Component } from 'react'
import testImage from './assets/images/test-image.jpg'
import styled from 'styled-components'
import WeatherIconSun from './assets/images/weatherIconSun.png'
import { ReactComponent as Sun } from './assets/images/icon-sun.svg'

const StyledCard = styled.section`
  margin-top: 57px;
  p {
    margin: 2px 0 0 4px;
  }
`
const WeatherIcon = styled.img`
  width: 48px;
  height: 50px;
`
const StyledDateHeadline = styled.h2`
  margin-left: 13px;
  margin-bottom: 5px;
`

const StyledHeadlineInImage = styled.h2`
  position: absolute;
  z-index: 1;
  margin-left: 13px;
  margin-top: 18px;
  color: white;
  text-shadow: 0 2px 14px black;
`
const StyledImage = styled.img`
  height: 237px;
  width: 100%;
  position: relative;
`
const CardBottom = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  position: absolute;
  width: 355px;
  box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 50%);
  height: 299px;
  margin: 0 25px;
  padding: 0 6px;
  bottom: 90px;
  background-color: white;
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
export default function Card() {
  return (
    <StyledCard>
      <StyledDateHeadline> H2 Title</StyledDateHeadline>
      <section>
        <StyledHeadlineInImage>H2 Title</StyledHeadlineInImage>
        <StyledImage src={testImage} alt="" />
      </section>
      <CardBottom>
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
      </CardBottom>
    </StyledCard>
  )
}
