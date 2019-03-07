import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import CreateCard from '../Create/CreateCard'
import testImage from '../assets/images/test-image.jpg'
import uid from 'uid'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function App() {
  const [cards, setCards] = useState([
    {
      date: '',
      location: '',
      temperatur: '20C°',
      picture: testImage,
      summary: '',
      food: '',
      taste: '',
      id: uid(),
    },
  ])

  function addCardToState(data) {
    setCards([...cards, data])
  }
  function addImageToState(image) {}
  return (
    <Router>
      <Grid>
        <Header />
        <Route
          exact
          path="/"
          key={uid()}
          render={() => <Home key={uid()} cards={cards} />}
        />
        <Route
          path="/create"
          key={uid()}
          render={({ history }) => (
            <CreateCard
              key={uid()}
              history={history}
              onSubmit={addCardToState}
            />
          )}
        />
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App
