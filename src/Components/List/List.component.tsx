import React from 'react'
import { Bar, BarState } from '../Bar/Bar.component'
import cx from 'classnames'
import s from './list.module.scss'

export interface Item {
  number: number
  state: BarState
}
export interface Props {
  list: Item[]
}

export const List = ({ list }: Props) => (
  <div className={cx(s.list)}>
    {list.map(({ number, state }, i) => (
      <Bar key={i} number={number} state={state} />
    ))}
  </div>
)
