import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import CardContainer from '../Card/CardContainer'

export default function Home({ cards }) {
  return (
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
  )
}
