import React, { FC } from 'react'

import { AuthContext } from '@src/containers/App/App'

import styles from './styles'

const Profile: FC = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <h1 css={styles.Profile}>
          {context.isAuth ? 'You are logged in!' : 'Not logged in!'}
        </h1>
      )
    }}
  </AuthContext.Consumer>
)

export default Profile
