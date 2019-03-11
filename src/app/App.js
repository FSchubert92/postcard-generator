import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import NewCardForm from '../Create/NewCardForm'
import uid from 'uid'
import { Helmet } from 'react-helmet'
import { saveCardsToStorage, getCardsFromStorage } from '../services'

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
    saveCardsToStorage(cards)
  }, [cards])

  function addCardToState(data) {
    console.log(data)
    setCards([...cards, data])
  }
  return (
    <React.Fragment>
      {/* <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </Helmet> */}
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
              <NewCardForm
                key={uid()}
                history={history}
                onSubmit={addCardToState}
              />
            )}
          />
          <GlobalStyle />
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App
