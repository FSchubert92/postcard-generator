import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
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
        <Route exact path="/" render={() => <Home />} />
        <GlobalStyle />
      </Grid>
    </Router>
  )
}

export default App
