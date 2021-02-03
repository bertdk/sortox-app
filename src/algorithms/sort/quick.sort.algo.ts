import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { sleep } from 'utils/sleep'

interface leftRightItems {
  leftList: Item[]
  rightList: Item[]
}

export const quickSort = async (
  list: Item[],
  setList: any,
  speed: number,
  fullList = list,
  start = 0
): Promise<Item[]> => {
  if (list.length < 1) {
    return list
  }
  const pivot = list[list.length - 1]
  const { leftList, rightList } = list.reduce(
    ({ leftList, rightList }: leftRightItems, c, i) =>
      i === list.length - 1
        ? { leftList, rightList }
        : c.number > pivot.number
        ? { leftList, rightList: [...rightList, c] }
        : { rightList, leftList: [...leftList, c] },
    { leftList: [], rightList: [] }
  )
  const leftListSorted = await quickSort(
    leftList,
    setList,
    speed,
    fullList,
    start
  )
  let sorted = [...leftListSorted, pivot, ...rightList]
  let newList = [
    ...fullList.slice(0, start),
    ...sorted,
    ...fullList.slice(start + sorted.length),
  ]
  setList(newList)
  await sleep(speed)
  const rightListSorted = await quickSort(
    rightList,
    setList,
    speed,
    fullList,
    start + leftList.length
  )
  pivot.state = BarState.Done
  sorted = [...leftListSorted, pivot, ...rightListSorted]
  newList = [
    ...fullList.slice(0, start),
    ...sorted,
    ...fullList.slice(start + sorted.length),
  ]
  setList(newList)
  await sleep(speed)
  return sorted
}
