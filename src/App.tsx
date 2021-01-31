import React, { useEffect, useState } from 'react'
import { selectionSort } from './algorithms/sort/selection'
import './App.css'
import { Controls } from './Components/List/Controls.component'
import { List } from './Components/List/List.component'
import { randomNumber } from './utils/randomNumber'

export const App = () => {
  const [list, setList] = useState([] as number[])
  const [length, setLength] = useState(10)

  useEffect(() => {
    setList(createRandomList(length))
  }, [length])

  const onSort = () => {
    selectionSort(list, setList)
  }

  const onRandomize = () => {
    setList(createRandomList(length))
  }

  const createRandomList = (length: number) => {
    const list: number[] = []
    for (let i = 1; i <= length; i++) {
      let newNumber = randomNumber(length)
      // eslint-disable-next-line no-loop-func
      while (list.some((n) => n === newNumber)) {
        newNumber = randomNumber(length)
      }
      list.push(newNumber)
    }
    return list
  }

  const onSlide = (e: any, value: number | number[]) => {
    setLength(value as number)
  }

  return (
    <>
      <Controls onSort={onSort} onRandomize={onRandomize} onSlide={onSlide} />
      <List list={list} />
    </>
  )
}
