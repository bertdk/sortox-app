import { bubbleSort } from 'algorithms/sort/bubble.sort.algo'
import { insertionSort } from 'algorithms/sort/insertion.sort.algo'
import { quickSort } from 'algorithms/sort/quick.sort.algo'
import { selectionSort } from 'algorithms/sort/selection.sort.algo'
import { AlgorithmsEnum } from 'contracts/enums/Algorithms.enum'
import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { Controls } from 'components/Controls/Controls.component'
import { List } from 'components/List/List.component'
import React, { useEffect, useState } from 'react'
import { randomNumber } from 'utils/randomNumber'

export const App = () => {
  const defaults = {
    speed: 100,
    length: 10,
    algorithm: AlgorithmsEnum.quick,
  }
  const [list, setList] = useState([] as Item[])
  const [algorithm, setAlgorithm] = useState(defaults.algorithm)
  const [length, setLength] = useState(defaults.length)
  const [speed, setSpeed] = useState(defaults.speed)
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
      case AlgorithmsEnum.bubble:
        await bubbleSort(list, setList, speed)
        break
      case AlgorithmsEnum.quick:
        await quickSort(list, setList, speed)
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

  const onSlideLength = (e: React.ChangeEvent<{}>, value: number | number[]) => {
    setLength(value as number)
  }

  const onSlideSpeed = (e: React.ChangeEvent<{}>, value: number | number[]) => {
    setSpeed(value as number)
  }

  const onAlgorithmChange = (e: React.ChangeEvent<{ value: AlgorithmsEnum }>) => {
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
        defaults={defaults}
      />
      <List list={list} />
    </>
  )
}
