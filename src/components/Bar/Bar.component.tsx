import React from 'react'
import cx from 'classnames'
import s from './bar.module.scss'
import { Tile } from './Tile.component'
import { Item } from 'contracts/representations/item.representation'

export const Bar = ({ number, state }: Item) => {
  return (
    <div className={cx(s.bar)}>
      <div className={cx(s.number)}>{number}</div>
      {[...Array(number)].map((n, i) => (
        <Tile key={i} state={state} />
      ))}
    </div>
  )
}
