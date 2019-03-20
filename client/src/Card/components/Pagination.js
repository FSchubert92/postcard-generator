import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Weather } from '../../assets/pagination-icons/weather.svg'
import { ReactComponent as Summary } from '../../assets/pagination-icons/summary.svg'
import { ReactComponent as Food } from '../../assets/pagination-icons/food.svg'
import { ReactComponent as FoodActive } from '../../assets/pagination-icons/food-active.svg'
import { ReactComponent as WeatherActive } from '../../assets/pagination-icons/weather-active.svg'
import { ReactComponent as SummaryActive } from '../../assets/pagination-icons/summary-active.svg'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
`

export default function Pagination({index}) {
    console.log(index)

  return (
    <Wrapper>
        {
            index ===0 
        ? (<SummaryActive/>)
        :(<Summary/>)
        }
         {
             index ===1 
        ? (<FoodActive/>)
        :(<Food/>)
        }
        {
            index ===2 
        ? (<WeatherActive/>)
        :(<Weather/>)
        }
    </Wrapper>
  )
}
