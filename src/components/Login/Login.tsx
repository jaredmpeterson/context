import React, { FC } from 'react'

import { AuthContext } from '@src/containers/App/App'

const Login: FC = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <button onClick={authContext.toggleAuth}>
          {authContext.isAuth ? 'Logout' : 'Login'}
        </button>
      )
    }}
  </AuthContext.Consumer>
)

export default Login
