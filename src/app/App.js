import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header/Header'
import Home from '../Home'

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
  return (
    <Router>
      <Grid>
        <Header />
        <Route exact path="/" render={() => <Home />} />
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App
