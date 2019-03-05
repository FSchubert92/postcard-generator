import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logoPng.png'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: -1px 0px 8px;
  img {
    height: 31px;
    width: 62px;
    margin: 5px;
    margin-left: 10px;
  }
  div {
    width: 62px;
  }
`
export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="Riyoko Logo" />
      <h1>RIYOKO</h1>
      <div />
    </StyledHeader>
  )
}
