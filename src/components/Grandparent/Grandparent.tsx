import React, { FC } from 'react'
import Parent from '../Parent/Parent'

const Grandparent: FC = props => <Parent>{props.children}</Parent>

export default Grandparent
