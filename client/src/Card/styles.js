import styled from 'styled-components'

export const StyledCard = styled.section`
  p {
    padding: 10px 10px 20px 0;
    margin: 2px 0 0 0px;
    line-height: 24px;
    font-size: 17px;
  }
`

export const DateHeadline = styled.h2`
  margin-left: 13px;
  margin-bottom: 5px;
`

export const LocationHeadline = styled.h2`
  color: white;
  text-shadow: 0 2px 14px black;
`

export const HeadlineAndButtonWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 48px;
`

export const HowWasToday = styled.h3`
  padding-top: 5px;
  font-size: 24px;
`

export const WeatherIcon = styled.img`
  width: 140px;
`

export const CardBottomWrapper = styled.section`
  display: grid;
  grid-gap: 15px;
  margin: -50px 25px 25px;
  padding: 12px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  background-color: white;
`

export const DeleteButton = styled.button`
  display: flex;
  height: 20px;
  width: 20px;
  background-color: white;
  color: crimson;
  border-width: 0;
  font-size: 30px;
  border-radius: 0;
  margin: 0 auto;
`

export const WeatherContainer = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
  justify-content: center;
  align-items: center;

  p {
    margin: auto;
    font-weight: bold;
  }
`
