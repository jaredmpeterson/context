import React, { FC } from 'react'

import styles from './styles'

type ProfileProps = {
  /** is user logged in */
  authenticated: boolean
}

/**
 * Displays a message based on *authenticated* status.
 */
const Profile: FC<ProfileProps> = props => {
  const { authenticated } = props
  return (
    <h1 css={styles.Profile}>
      {authenticated ? 'You are logged in!' : 'Not logged in!'}
    </h1>
  )
}

export default Profile
