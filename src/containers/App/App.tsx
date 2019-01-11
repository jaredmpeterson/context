import React, { Component } from 'react'

// @src imports
import logo from '@src/assets/logo.svg'
import Version from '@src/components/Version/Version'

// relative imports

// styles
import styles from './styles'

class App extends Component {
  render() {
    return (
      <div css={styles.App}>
        <header css={styles.AppHeader}>
          <img src={logo} css={styles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/components/App/App.tsx</code> and save to reload.
          </p>
          <a
            css={styles.AppLink}
            href="https://github.com/SendOutCards"
            target="_blank"
            rel="noopener noreferrer"
          >
            SendOutCards
          </a>
          <Version />
        </header>
      </div>
    )
  }
}

export default App
