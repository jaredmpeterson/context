import React, { FC } from 'react'

import { AuthContext } from '@src/containers/App/App'

import styles from './styles'

const Login: FC = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <button css={styles.Login} onClick={authContext.toggleAuth}>
          {authContext.isAuth ? 'Logout' : 'Login'}
        </button>
      )
    }}
  </AuthContext.Consumer>
)

export default Login
