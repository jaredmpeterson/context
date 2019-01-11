import React, { Component } from 'react'

import styles from './styles'

type LoginProps = {
  isAuth: boolean
  clicked: () => void
}

/**
 * Login button with dynamic styles
 */
class Login extends Component<LoginProps, {}> {
  render() {
    const { clicked, isAuth } = this.props
    return (
      <button css={isAuth ? styles.Logout : styles.Login} onClick={clicked}>
        {isAuth ? 'Logout' : 'Login'}
      </button>
    )
  }
}

export default Login
