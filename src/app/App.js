import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home/Home'
import CreateCard from '../Create/CreateCard'

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
  return (
    <Router>
      <Grid>
        <Header />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/create" component={CreateCard} />
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App
