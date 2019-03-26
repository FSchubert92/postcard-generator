import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import Login from '../Landingpage/Login'
import Register from '../Landingpage/Register'
import PrivateRoute from '../auth/PrivateRoute'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import NewCardForm from '../CreateCard/NewCardForm'
import {
  saveCardsToStorage,
  getCardsFromStorage,
  getAllCards,
  postNewCard,
  deleteCardFromServer,
  setCurrentUser,
  logoutUser,
} from '../services'
import LandingPage from '../Landingpage/LandingPage'

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
  const [auth, setAuth] = useState({ user: {}, isAuthenticated: false })

  useEffect(() => {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken)
      const decoded = jwt_decode(localStorage.jwtToken)
      setCurrentUser(decoded, setAuth)

      const currentTime = Date.now() / 1000
      if (decoded.exp < currentTime) {
        logoutUser(setAuth)
        window.location.href = '/login'
      }
    }
  }, [])

  useEffect(() => {
    getAllCards().then(res => {
      setCards(res.data)
    })
  }, [])

  useEffect(() => {
    saveCardsToStorage(cards)
  }, [cards])

  function addCardToState(data) {
    data.user = auth.user.username
    setCards([...cards, data])
    console.log(data)
    postNewCard(data)
  }

  function deleteCard(card) {
    console.log(card)
    deleteCardFromServer(card)
    const index = cards.indexOf(card)
    setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
  }

  function onLogoutClick() {
    logoutUser(setAuth)
  }
  console.log(auth.user.username)

  return (
    <React.Fragment>
      <Router>
        <Grid>
          <GlobalStyle />
          <Header onClick={onLogoutClick} auth={auth.isAuthenticated} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LandingPage props={props} setAuth={setAuth} auth={auth} />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => (
                <Register props={props} setAuth={setAuth} auth={auth} />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login props={props} setAuth={setAuth} auth={auth} />
              )}
            />
            <PrivateRoute
              exact
              auth={auth.isAuthenticated}
              path="/home"
              user={auth.user.username}
              cards={cards}
              onDelete={deleteCard}
              component={Home}
              // render={() => <Home cards={cards} onDelete={deleteCard} />}
            />
            <PrivateRoute
              exact
              auth={auth.isAuthenticated}
              setAuth={setAuth}
              path="/create"
              onSubmit={addCardToState}
              component={NewCardForm}

              // render={({ history }) => (
              //   <NewCardForm
              //     key={uid()}
              //     history={history}
              //     onSubmit={addCardToState}
              //   />
            />
          </Switch>
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App
