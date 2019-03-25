import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LoginLogo } from '../assets/landingpage-icons/login.svg'
import { ReactComponent as SignUpLogo } from '../assets/landingpage-icons/plus.svg'

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 80px;
  grid-column-gap: 20px;
  margin: 20px;
`
const Text = styled.p`
  grid-column: 1 / span 2;
`
const Wrapper = styled(NavLink)`
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

const IconWrapper = styled.div`
  height: 18px;
  padding-top: 5px;
  margin-bottom: 5px;
`
export default function LandingPage() {
  return (
    <Container>
      <Text>
        Welcome! Join RIYOKO, the revolutionary travel app right away! If you
        don't have an account yet, sign up, and share your awesome experiences
        with the people who probably love or at least want to impress.
      </Text>
      <Wrapper to="register">
        <IconWrapper>
          <SignUpLogo />
        </IconWrapper>
        <p>Sign Up now!</p>
      </Wrapper>
      <Wrapper to="login">
        <IconWrapper>
          <LoginLogo />
        </IconWrapper>
        <p>Log in</p>
      </Wrapper>
    </Container>
  )
}
