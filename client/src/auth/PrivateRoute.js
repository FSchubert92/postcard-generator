import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (auth) {
    return <Route {...rest} render={props => <Component {...props} />} />
  } else {
    return <Redirect to="/login" />
  }
}

export default PrivateRoute
