import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { sleep } from 'utils/sleep'

export const selectionSort = async (list: Item[], setList: any, speed: number) => {
  let listToSort = list
  const sorted: Item[] = []
  while (sorted.length !== list.length) {
    let min = listToSort[0]
    let minIndex = 0
    listToSort[minIndex].state = BarState.Pivot
    for (let i = 1; i < listToSort.length; i++) {
      listToSort[i].state = BarState.Current
      if (listToSort[i].number < min.number) {
        listToSort[minIndex].state = BarState.ToDo
        min = listToSort[i]
        minIndex = i
      }
      setList([...sorted, ...listToSort])
      await sleep(speed)
      listToSort[i].state = BarState.ToDo
      listToSort[minIndex].state = BarState.Pivot
    }

    listToSort = [...listToSort.slice(0, minIndex), ...listToSort.slice(minIndex + 1)]

    sorted.push({ number: min.number, state: BarState.Done })
    setList([...sorted, ...listToSort])
  }
  return sorted
}
