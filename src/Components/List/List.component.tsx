import React from 'react'
import { Bar } from '../Bar/Bar.component'
import cx from 'classnames'
import s from './list.module.scss'

export interface Props {
  list: number[]
}

export const List = ({ list }: Props) => (
  <div className={cx(s.list)}>
    {list.map((n, i) => (
      <Bar key={i} number={n} />
    ))}
  </div>
)
