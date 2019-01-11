import React, { Component } from 'react'

// @src imports
import Grandparent from '@src/components/Grandparent/Grandparent'
import Login from '@src/components/Login/Login'

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
      <div css={styles.App}>
        <header css={styles.AppHeader}>
          <Grandparent userAuth={isAuth} />
          <Login clicked={toggleAuth} isAuth={isAuth} />
        </header>
      </div>
    )
  }
}

export default App
