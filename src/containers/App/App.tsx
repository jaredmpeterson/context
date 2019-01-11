import React, { Component, createContext } from 'react'

// @src imports
import Login from '@src/components/Login/Login'
import Profile from '@src/components/Profile/Profile'

// styles
import styles from './styles'

export const AuthContext = createContext({
  isAuth: false,
  // tslint:disable-next-line:no-empty
  toggleAuth: () => {},
})

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
      <AuthContext.Provider value={{ isAuth, toggleAuth }}>
        <div css={styles.App}>
          <header css={styles.AppHeader}>
            <Profile />
            <Login />
          </header>
        </div>
      </AuthContext.Provider>
    )
  }
}

export default App
