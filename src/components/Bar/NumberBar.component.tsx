import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import s from './bar.module.scss'

interface Props {
  number: number
  refParent: React.RefObject<HTMLDivElement>
  height: number
}

export const NumberBar = ({ refParent, number, height }: Props) => {
  const [isToShort, setIsToShort] = useState(false)
  const [isToSmall, setIsToSmall] = useState(false)
  const widthOfOneChar = 10
  const heightOfOneChar = 18

  useEffect(() => {
    const countChars = number.toString().length
    const dimension = refParent?.current?.getBoundingClientRect() as DOMRect
    const small = widthOfOneChar * countChars > dimension.width && !!(number % 5 === 0)
    const short = heightOfOneChar * countChars > dimension.height
    console.log(number, number % 5, number % 5 === 0, small, short)
    setIsToSmall(() => small)
    setIsToShort(() => short)
  }, [refParent, number, height])

  return <div className={cx(s.number, (isToShort || isToSmall) && s.dark)}>{isToSmall ? '' : number}</div>
}
