import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './assets/images/logoPng.png'
import Card from './Card'

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 0px 8px;
  img {
    position: absolute;
    left: 0;
    height: 31px;
    width: 62px;
    margin: 5px;
    margin-left: 10px;
  }
`

export default function Home() {
  return (
    <React.Fragment>
      <Header>
        <img src={Logo} alt="Riyoko Logo" />
        <h1>RIYOKO</h1>
      </Header>
      <Card />
    </React.Fragment>
  )
}
