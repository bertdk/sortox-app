import React from 'react'
import cx from 'classnames'
import s from './list.module.scss'
import { Bar } from 'components/Bar/Bar.component'
import { Item } from 'contracts/representations/item.representation'

interface Props {
  list: Item[]
}

export const List = ({ list }: Props) => (
  <div className={cx(s.list)}>
    {list.map(({ number, state }, i) => (
      <Bar key={i} number={number} state={state} max={list.length} />
    ))}
  </div>
)
