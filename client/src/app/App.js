import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import NewCardForm from '../Create/NewCardForm'
import uid from 'uid'
import {
  saveCardsToStorage,
  getCardsFromStorage,
  getAllCards,
  postNewCard,
  deleteCardFromServer,
} from '../services'

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
  const [cards, setCards] = useState(getCardsFromStorage())

  useEffect(() => {
    getAllCards().then(res => {
      setCards(res.data)
    })
  }, [])

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

  function addCardToState(data) {
    setCards([...cards, data])
    postNewCard(data)
  }

  function deleteCard(card) {
    console.log(card)
    deleteCardFromServer(card).then(res => console.log(res))
    const index = cards.indexOf(card)
    setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
  }

  return (
    <React.Fragment>
      <Router>
        <Grid>
          <Header />
          <Route
            exact
            path="/"
            render={() => <Home cards={cards} onDelete={deleteCard} />}
          />
          <Route
            path="/create"
            key={uid()}
            render={({ history }) => (
              <NewCardForm
                key={uid()}
                history={history}
                onSubmit={addCardToState}
              />
            )}
          />
          <GlobalStyle />
          {/* <Route path="/test" render={() => <Carousel />} /> */}
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App
