import React from 'react'
import { bool, any } from 'prop-types'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

import { useAuth } from '@/hooks/authContext'

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { USER_LOGGED } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!USER_LOGGED ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/' }} />
        )
      }}
    />
  )
}

Route.propTypes = {
  isPrivate: bool,
  component: any,
}

export default Route
