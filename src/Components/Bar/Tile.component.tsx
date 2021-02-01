import React from 'react'
import cx from 'classnames'
import s from './tile.module.scss'
import { BarState } from './Bar.component'

export interface Props {
  state: BarState
}

export const Tile = ({ state }: Props) => (
  <div
    className={cx(
      s.tile,
      state === BarState.Done && s.done,
      state === BarState.Current && s.current
    )}
  />
)
