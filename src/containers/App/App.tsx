import React, { Component } from 'react'

// @src imports
import Grandparent from '@src/components/Grandparent/Grandparent'
import Login from '@src/components/Login/Login'
import { AuthProvider } from '@src/context/auth'

// styles
import styles from './styles'

type AppProps = {}

type State = {
  isAuth: boolean
}
class App extends Component<AppProps, State> {
  state: State = {
    isAuth: false,
  }

  toggleAuth = () => {
    this.setState(prevState => {
      return {
        isAuth: !prevState.isAuth,
      }
    })
  }

  render() {
    const { isAuth } = this.state
    const { toggleAuth } = this
    return (
      <AuthProvider value={{ isAuth, toggleAuth }}>
        <div css={styles.App}>
          <header css={styles.AppHeader}>
            <Grandparent />
            <Login />
          </header>
        </div>
      </AuthProvider>
    )
  }
}

export default App
