import { BarState } from '../../Components/Bar/Bar.component'
import { Item } from '../../Components/List/List.component'
import { sleep } from '../../utils/sleep'

export const insertionSort = async (
  list: Item[],
  setList: any,
  speed: number
) => {
  let listToSort = [...list]
  let sorted: Item[] = []
  while (sorted.length !== list.length) {
    let current = listToSort[0]
    let beforeIndex = 0
    listToSort[0].state = BarState.Pivot
    for (let i = sorted.length - 1; i >= 0 && !beforeIndex; i--) {
      sorted[i].state = BarState.Current
      if (sorted[i].number < current.number) {
        beforeIndex = i
      } else if (i === 0) {
        beforeIndex = -1
      }
      setList([...sorted, ...listToSort])
      await sleep(speed)
      sorted[i].state = BarState.Done
    }

    listToSort.shift()
    current.state = BarState.Done
    sorted = [
      ...sorted.slice(0, beforeIndex + 1),
      current,
      ...sorted.slice(beforeIndex === -1 ? 0 : beforeIndex + 1),
    ]
    setList([...sorted, ...listToSort])
  }
  return sorted
}
