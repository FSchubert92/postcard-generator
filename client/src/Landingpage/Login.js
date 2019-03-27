import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'

import { loginUser, setCurrentUser } from '../services'
import { Wrapper, IconWrapper } from './styling'
import { ReactComponent as SignUpLogo } from '../assets/landingpage-icons/plus.svg'
import styled from 'styled-components'

const StyledForm = styled.form`
  align-items: center;
  display: grid;
  margin: 20px;
  grid-template-rows: 48px 48px 48px 48px 163px;
  grid-gap: 20px;
  overflow-y: scroll;
  button {
    justify-self: center;
    align-self: end;
  }
`

export default function Login({ props, setAuth, auth }) {
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push('/home')
    }
  })

  const onInputChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()

    loginUser(userData)
      .then(res => {
        const { token } = res.data
        setAuthToken(token)
        localStorage.setItem('jwtToken', token)
        const decoded = jwt_decode(localStorage.jwtToken)
        setCurrentUser(decoded, setAuth)
      })
      .catch(err => setErrors(err.response.data))
  }

  return (
    <React.Fragment>
      <StyledForm onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username or E-Mail"
          value={userData.login}
          name="login"
          onChange={onInputChange}
        />
        {errors && errors.login ? <p>{errors.login}</p> : null}
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
          onChange={onInputChange}
        />
        {errors && errors.password ? <p>{errors.password}</p> : null}

        <button>OK</button>
      </StyledForm>
      <div>
        No Account yet?!
        <Wrapper to="register">
          <IconWrapper>
            <SignUpLogo />
          </IconWrapper>
          <p>Sign Up now!</p>
        </Wrapper>
      </div>
    </React.Fragment>
  )
}
