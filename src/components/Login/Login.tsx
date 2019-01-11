import React, { Component } from 'react'

import styles from './styles'

type LoginProps = {
  isAuth: boolean
  clicked: () => void
}

class Login extends Component<LoginProps, {}> {
  render() {
    const { clicked, isAuth } = this.props
    return (
      <button css={styles.Login} onClick={clicked}>
        {isAuth ? 'Logout' : 'Login'}
      </button>
    )
  }
}

export default Login
