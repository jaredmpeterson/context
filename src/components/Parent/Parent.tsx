import React, { FC } from 'react'
import Child from '../Child/Child'

const Parent: FC = props => <Child>{props.children}</Child>

export default Parent
