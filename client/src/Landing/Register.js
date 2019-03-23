import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'

import { registerUser, setCurrentUser } from '../services'

export default function Register({ props, setAuth, auth }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push('/dashboard')
    }
  })

  const onInputChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()

    registerUser(userData)
      .then(res => {
        const { token } = res.data
        setAuthToken(token)
        localStorage.setItem('jwtToken', token)
        const decoded = jwt_decode(localStorage.jwtToken)
        setCurrentUser(decoded, setAuth)
      })
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={userData.username}
          onChange={onInputChange}
        />
        {errors && errors.username ? <p>{errors.username}</p> : null}
        <input
          type="email"
          placeholder="E-Mail"
          name="email"
          value={userData.email}
          onChange={onInputChange}
        />
        {errors && errors.email ? <p>{errors.email}</p> : null}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={onInputChange}
        />
        {errors && errors.password ? <p>{errors.password}</p> : null}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={userData.password2}
          onChange={onInputChange}
        />
        {errors && errors.password2 ? <p>{errors.password2}</p> : null}
        <button>Register</button>
      </form>
    </React.Fragment>
  )
}