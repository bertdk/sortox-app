import { BarState } from '../../Components/Bar/Bar.component'
import { Item } from '../../Components/List/List.component'
import { sleep } from '../../utils/sleep'

export const bubbleSort = async (list: Item[], setList: any, speed: number) => {
  let listToSort = list
  const sorted: Item[] = []
  while (sorted.length !== list.length) {
    for (let i = listToSort.length - 1; i > 0; i--) {
      const left = listToSort[i - 1]
      const right = listToSort[i]
      left.state = BarState.Current
      right.state = BarState.Current
      if (left.number > right.number) {
        const remember = left.number
        left.number = right.number
        right.number = remember
      }
      setList([...sorted, ...listToSort])
      await sleep(speed)
      left.state = BarState.ToDo
      right.state = BarState.ToDo
    }

    sorted.push({ number: listToSort[0].number, state: BarState.Done })
    listToSort = listToSort.slice(1)
    setList([...sorted, ...listToSort])
  }
  return sorted
}
