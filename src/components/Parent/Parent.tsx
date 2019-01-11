import React, { FC } from 'react'
import Child from '../Child/Child'

import styles from './styles'

type ParentProps = {
  /** is user logged in */
  auth: boolean
}

/**
 * Parent container with border styles
 */
const Parent: FC<ParentProps> = props => {
  const { auth, children } = props
  return (
    <div css={styles.Parent}>
      <Child authenticated={auth}>{children}</Child>
    </div>
  )
}

export default Parent
