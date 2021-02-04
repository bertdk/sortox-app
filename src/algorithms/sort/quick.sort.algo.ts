import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { sleep } from 'utils/sleep'

export const quickSort = async (
  list: Item[],
  setList: React.Dispatch<React.SetStateAction<Item[]>>,
  speed: number,
  fullList = list,
  start = 0
): Promise<Item[]> => {
  if (list.length < 1) {
    return list
  }

  const sincePivot = [list[list.length - 1]]
  const tillPivot = []
  let currentFullList = fullList

  sincePivot[0].state = BarState.Pivot
  for (let index = list.length - 2; index >= 0; index--) {
    const current = list[index]
    current.state = BarState.Current
    currentFullList = [
      ...currentFullList.slice(
        0,
        start + list.length - sincePivot.length - tillPivot.length
      ),
      ...tillPivot,
      ...sincePivot,
      ...currentFullList.slice(start + list.length),
    ]
    debugger
    setList(currentFullList)
    await sleep(speed)
    if (current.number > sincePivot[0].number) {
      sincePivot.push(current)
    } else {
      tillPivot.unshift(current)
    }
    current.state = BarState.ToDo
  }
  currentFullList = [
    ...currentFullList.slice(
      0,
      start + list.length - sincePivot.length - tillPivot.length
    ),
    ...tillPivot,
    ...sincePivot,
    ...currentFullList.slice(start + list.length),
  ]
  sincePivot[0].state = BarState.Done

  const leftListSorted = await quickSort(
    tillPivot,
    setList,
    speed,
    currentFullList,
    start
  )
  let sorted = [...leftListSorted, ...sincePivot]
  currentFullList = [
    ...currentFullList.slice(0, start),
    ...sorted,
    ...currentFullList.slice(start + sorted.length),
  ]
  setList(currentFullList)

  const rightListSorted = await quickSort(
    sincePivot.slice(1),
    setList,
    speed,
    currentFullList,
    start + tillPivot.length + 1
  )
  sorted = [...leftListSorted, sincePivot[0], ...rightListSorted]
  currentFullList = [
    ...currentFullList.slice(0, start),
    ...sorted,
    ...currentFullList.slice(start + sorted.length),
  ]
  setList(currentFullList)

  return sorted
}
