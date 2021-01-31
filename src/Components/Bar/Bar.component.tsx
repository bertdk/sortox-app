import React from 'react'
import { Tile } from './Tile.component'
import cx from 'classnames'
import s from './bar.module.scss'

export interface Props {
  number: number
}

export const Bar = ({ number }: Props) => {
  return (
    <div className={cx(s.bar)}>
      {[...Array(number)].map((n, i) => (
        <Tile key={i} />
      ))}
    </div>
  )
}
