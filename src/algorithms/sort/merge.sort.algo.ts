import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { sleep } from 'utils/sleep'

export const mergeSort = async (list: Item[], setList: React.Dispatch<React.SetStateAction<Item[]>>, speed: number) => {
  let sortingSize = 1
  let listCurrent: Item[] = list
  while (sortingSize < list.length) {
    const sortedSteps: Item[] = []
    sortingSize *= 2
    const finalIteration = sortingSize >= list.length
    for (let step = 0; step < Math.ceil(list.length / sortingSize); step++) {
      const startStep = step * sortingSize
      const maxEnd = (step + 1) * sortingSize
      const endStep = maxEnd < list.length ? maxEnd : list.length
      const left = listCurrent.slice(startStep, startStep + sortingSize / 2)
      const right = listCurrent.slice(startStep + sortingSize / 2, endStep)
      listCurrent.slice(startStep, endStep).forEach((node) => (node.state = BarState.Pivot))
      let leftNextIndex = 0
      let rightNextIndex = 0
      while (leftNextIndex < left.length || rightNextIndex < right.length) {
        const leftCurrent = left[leftNextIndex]
        const rightCurrent = right[rightNextIndex]
        if (leftCurrent) {
          leftCurrent.state = BarState.Current
        }
        if (rightCurrent) {
          rightCurrent.state = BarState.Current
        }
        if (!leftCurrent || (rightCurrent && leftCurrent.number > rightCurrent.number)) {
          sortedSteps.push(rightCurrent)
          rightNextIndex++
          if (finalIteration) {
            rightCurrent.state = BarState.Done
          }
        } else if (!rightCurrent || (leftCurrent && leftCurrent.number <= rightCurrent.number)) {
          sortedSteps.push(leftCurrent)
          leftNextIndex++
          if (finalIteration) {
            leftCurrent.state = BarState.Done
          }
        }
        listCurrent = [
          ...sortedSteps,
          ...left.slice(leftNextIndex),
          ...right.slice(rightNextIndex),
          ...listCurrent.slice(endStep),
        ]
        setList(listCurrent)

        await sleep(speed)
        if (leftCurrent && !finalIteration) {
          leftCurrent.state = BarState.ToDo
        }
        if (rightCurrent && !finalIteration) {
          rightCurrent.state = BarState.ToDo
        }
      }
    }
  }

  return true
}
