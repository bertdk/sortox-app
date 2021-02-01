import React from 'react'
import { Tile } from './Tile.component'
import cx from 'classnames'
import s from './bar.module.scss'

export enum BarState {
  Done = 'done',
  Current = 'current',
  ToDo = 'todo',
}
export interface Props {
  number: number
  state: BarState
}

export const Bar = ({ number, state }: Props) => {
  return (
    <div className={cx(s.bar)}>
      {[...Array(number)].map((n, i) => (
        <Tile key={i} state={state} />
      ))}
    </div>
  )
}
