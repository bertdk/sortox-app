import React, { useEffect, useState } from 'react'
import { insertionSort } from './algorithms/sort/insertion'
import { selectionSort } from './algorithms/sort/selection'
import { BarState } from './Components/Bar/Bar.component'
import { AlgorithmsEnum, Controls } from './Components/List/Controls.component'
import { Item, List } from './Components/List/List.component'
import { randomNumber } from './utils/randomNumber'

export const App = () => {
  const [list, setList] = useState([] as Item[])
  const [algorithm, setAlgorithm] = useState(AlgorithmsEnum.selection)
  const [length, setLength] = useState(10)
  const [speed, setSpeed] = useState(15)
  const [isSorting, setIsSorting] = useState(false)

  useEffect(() => {
    setList(createRandomList(length))
  }, [length])

  const onSort = async () => {
    setIsSorting(true)
    switch (algorithm) {
      case AlgorithmsEnum.selection:
        await selectionSort(list, setList, speed)
        break
      case AlgorithmsEnum.insertion:
        await insertionSort(list, setList, speed)
        break

      default:
        break
    }
    setIsSorting(false)
  }

  const onRandomize = () => {
    setList(createRandomList(length))
  }

  const createRandomList = (length: number) => {
    const list: Item[] = []
    for (let i = 1; i <= length; i++) {
      let newNumber = randomNumber(length)
      // eslint-disable-next-line no-loop-func
      while (list.some(({ number }) => number === newNumber)) {
        newNumber = randomNumber(length)
      }
      list.push({ number: newNumber, state: BarState.ToDo })
    }
    return list
  }

  const onSlideLength = (e: any, value: number | number[]) => {
    setLength(value as number)
  }

  const onSlideSpeed = (e: any, value: number | number[]) => {
    setSpeed(value as number)
  }

  const onAlgorithmChange = (
    e: React.ChangeEvent<{ value: AlgorithmsEnum }>
  ) => {
    setAlgorithm(e.target.value)
  }

  return (
    <>
      <Controls
        onSort={onSort}
        onRandomize={onRandomize}
        onSlideLength={onSlideLength}
        onSlideSpeed={onSlideSpeed}
        algorithm={algorithm}
        onAlgorithmChange={onAlgorithmChange}
        enableControls={!isSorting}
      />
      <List list={list} />
    </>
  )
}
