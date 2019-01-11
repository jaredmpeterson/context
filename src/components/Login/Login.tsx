import React, { Component } from 'react'

import AuthContext from '@src/context/auth'

import styles from './styles'

class Login extends Component {
  static contextType = AuthContext

  render() {
    const { isAuth, toggleAuth } = this.context
    return (
      <button css={styles.Login} onClick={toggleAuth}>
        {isAuth ? 'Logout' : 'Login'}
      </button>
    )
  }
}

export default Login
