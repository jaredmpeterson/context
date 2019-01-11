import React, { FC } from 'react'
import Parent from '../Parent/Parent'

type GrandparentProps = {
  /** is user logged in */
  userAuth: boolean
}

const Grandparent: FC<GrandparentProps> = props => {
  const { children, userAuth } = props
  return <Parent auth={userAuth}>{children}</Parent>
}

export default Grandparent
