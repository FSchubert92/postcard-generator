import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import testImage from './assets/images/test-image.jpg'

export default function Home() {
  const [cards, setCards] = useState([
    {
      date: '24 August 2019',
      location: 'New York City',
      picture: { testImage },
      summary: 'Lorem Ipsum',
      iAte: 'Hamburger',
      itTasted: 'good',
    },
  ])
  return (
    <Card
      date={cards.date}
      location={cards.location}
      picture={cards.picture}
      summary={cards.summary}
      iAte={cards.iAte}
      itTasted={cards.itTasted}
    />
  )
}
