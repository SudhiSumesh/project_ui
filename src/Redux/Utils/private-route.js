import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
export function PrivateRoute({ component: Component, authed, ...rest }) {
  const token = localStorage.getItem('access_token')
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true && token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.any,
  authed: PropTypes.bool,
  location: PropTypes.any,
}
