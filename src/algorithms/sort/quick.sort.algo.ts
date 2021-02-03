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
  start = 0,
  end = list.length
): Promise<Item[]> => {
  if (list.length < 1) {
    return list
  }
  const pivot = list[list.length - 1]
  const { leftList, rightList } = list.reduce(
    ({ leftList, rightList }: leftRightItems, c, i) => {
      if (i === list.length - 1) {
        return { leftList, rightList }
      }
      if (c.number > pivot.number) {
        return { leftList, rightList: [...rightList, c] }
      }
      return { rightList, leftList: [...leftList, c] }
    },
    { leftList: [], rightList: [] }
  )
  const leftListSorted = await quickSort(leftList, setList, speed, fullList)
  const rightListSorted = await quickSort(rightList, setList, speed, fullList)
  pivot.state = BarState.Done
  setList([...leftListSorted, pivot, ...rightListSorted])
  await sleep(speed)
  return [...leftListSorted, pivot, ...rightListSorted]
}
