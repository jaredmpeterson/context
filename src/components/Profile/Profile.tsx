import React, { FC } from 'react'

import { AuthConsumer } from '@src/context/auth'

import styles from './styles'

const Profile: FC = props => (
  <AuthConsumer>
    {context => {
      return (
        <h1 css={styles.Profile}>
          {context.isAuth ? 'You are logged in!' : 'Not logged in!'}
        </h1>
      )
    }}
  </AuthConsumer>
)

export default Profile
