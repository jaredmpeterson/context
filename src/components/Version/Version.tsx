import React, { FC } from 'react'

const Version: FC = props => {
  return (
    <p>
      Version: <code>{process.env.APP_VERSION}</code>
    </p>
  )
}

export default Version
