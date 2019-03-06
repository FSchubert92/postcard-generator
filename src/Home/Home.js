import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import CardContainer from '../Card/CardContainer'
import testImage from '../assets/images/test-image.jpg'
import testImage2 from '../assets/images/test-image2.jpg'
import testImage3 from '../assets/images/test-image3.jpg'
import testPortrait from '../assets/images/test-portrait.jpg'
import uid from 'uid'

export default function Home() {
  const [cards, setCards] = useState([
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage,
      summary:
        'Heute sind wir angekommen. Die Fahrt vom Flughafen ins Hotel war schon sehr cool, New Yorker Ubahnen sind anders als in Hamburg. Vor allem war es ziemlich dreckig. Abend haben wir uns den Time Square angeschaut, das war großartig!',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage2,
      summary: 'Lorem Ipsum',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testImage3,
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
    {
      date: '24 August 2019',
      location: 'New York City',
      temperatur: '20C°',
      picture: testPortrait,
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc',
      iAte: 'Hamburger',
      itTasted: 'good',
      id: uid(),
    },
  ])
  return (
    <CardContainer data-cy="card-container">
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
