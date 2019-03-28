import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledForm = styled.form`
  align-items: center;
  display: grid;
  margin: 20px;
  grid-template-rows: repeat(4, 48px) 100px 48px 48px;
  grid-gap: 20px;
  overflow-y: scroll;

  button {
    justify-self: center;
    align-self: end;
  }
`

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 80px;
  grid-column-gap: 20px;
  margin: 20px;
`

export const Text = styled.p`
  grid-column: 1 / span 2;
`

export const Wrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #afaaaa;
  border-radius: 9px;
  padding: 5px;
  text-decoration: none;
  color: #333;
`

export const IconWrapper = styled.div`
  height: 18px;
  padding-top: 5px;
  margin-bottom: 5px;
`

export const Footer = styled.section`
  margin: 0 50px;
`
