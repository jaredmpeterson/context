import React, { FC } from 'react'
import Child from '../Child/Child'

type ParentProps = {
  /** is user logged in */
  auth: boolean
}

const Parent: FC<ParentProps> = props => {
  const { auth, children } = props
  return <Child authenticated={auth}>{children}</Child>
}

export default Parent
