import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from '../Card/Card'
import CardContainer from '../Card/CardContainer'
import styled from 'styled-components'

const CreateButton = styled(NavLink)`
  background-color: #18b839;
  color: white;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  text-decoration: none;
  position: fixed;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
  bottom: 9px;
  left: 41%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  padding: 3px;
`

export default function Home({ cards }) {
  return (
    <React.Fragment>
      <CardContainer data-cy="card-container">
        {cards.map(card => (
          <Card
            date={card.date}
            location={card.location}
            temperatur={card.temperatur}
            picture={card.picture}
            summary={card.summary}
            iAte={card.food}
            itTasted={card.taste}
            key={card.id}
          />
        ))}
      </CardContainer>
      <CreateButton to="/create">
        <div>+</div>
      </CreateButton>
    </React.Fragment>
  )
}