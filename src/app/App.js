import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import CreateCard from '../Create/CreateCard'
import testImage from '../assets/images/test-image.jpg'
import testImage2 from '../assets/images/test-image2.jpg'
import testImage3 from '../assets/images/test-image3.jpg'
import testPortrait from '../assets/images/test-portrait.jpg'
import uid from 'uid'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 18px;
    background: linear-gradient(transparent, #eae6e6);
  }
`

function App() {
  const [cards, setCards] = useState([
    {
      date: '',
      location: '',
      temperatur: '20C°',
      picture: testImage,
      summary: '',
      iAte: '',
      itTasted: '',
      id: uid(),
    },
  ])
  return (
    <Router>
      <Grid>
        <Header />
        <Route exact path="/" render={() => <Home cards={cards} />} />
        <Route path="/create" component={CreateCard} />
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App
