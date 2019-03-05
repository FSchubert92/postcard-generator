import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import testImage from './assets/images/test-image.jpg'
import uid from 'uid'
import CardContainer from './Card/CardContainer'

export default function Home() {
  const [cards, setCards] = useState([
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage,
      summary: 'Lorem Ipsum',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage,
      summary: 'Lorem Ipsum',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage,
      summary: 'Lorem Ipsum',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
  ])
  return (
    <CardContainer>
      {cards.map(card => (
        <Card
          date={card.date}
          location={card.location}
          temperatur={card.temperatur}
          picture={card.picture}
          summary={card.summary}
          iAte={card.iAte}
          itTasted={card.itTasted}
          key={card.id}
        />
      ))}
    </CardContainer>
  )
}
