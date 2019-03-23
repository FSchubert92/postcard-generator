import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logoPng.png'
import { ReactComponent as LogoutIcon } from '../assets/header-icons/logout.svg'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 0px 8px;
  img {
    width: 62px;
    height: 31px;
    margin: 5px;
    margin-left: 10px;
  }
  svg {
    margin-left: auto;
  }
`

export default function Header({ onClick }) {
  return (
    <StyledHeader>
      <img src={Logo} alt="Riyoko Logo" />
      <h1>RIYOKO</h1>
      <LogoutIcon onClick={onClick} />
    </StyledHeader>
  )
}
