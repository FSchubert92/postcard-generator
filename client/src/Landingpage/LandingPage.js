import React from 'react'
import { Wrapper, IconWrapper, Container, Text } from './styling'
import { ReactComponent as LoginLogo } from '../assets/landingpage-icons/login.svg'
import { ReactComponent as SignUpLogo } from '../assets/landingpage-icons/plus.svg'

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
