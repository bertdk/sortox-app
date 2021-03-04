import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import s from './bar.module.scss'
import { BarState } from 'contracts/enums/BarStatus.enum'
import { NumberBar } from './NumberBar.component'

interface Props {
  number: number
  state: BarState
  max: number
}

export const Bar = ({ number, state, max }: Props) => {
  const [height, setHeight] = useState(0)
  const refBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeight(() => (number / max) * 100)
  }, [max, number])

  return (
    <div
      className={cx(
        s.bar,
        state === BarState.Done && s.done,
        state === BarState.Current && s.current,
        state === BarState.Pivot && s.pivot
      )}
      style={{ height: height + '%' }}
      ref={refBar}
    >
      <NumberBar refParent={refBar} number={number} height={height} />
    </div>
  )
}
