import React, { FC, Fragment } from 'react'

import Profile from '@src/components/Profile/Profile'

type ChildProps = {
  /** is user logged in */
  authenticated: boolean
}

const Child: FC<ChildProps> = props => {
  const { authenticated } = props
  return (
    <Fragment>
      <Profile authenticated={authenticated} />
    </Fragment>
  )
}

export default Child
