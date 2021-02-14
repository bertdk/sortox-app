import { BarState } from 'contracts/enums/BarStatus.enum'
import { Item } from 'contracts/representations/item.representation'
import { sleep } from 'utils/sleep'

export const shellSort = async (list: Item[], setList: React.Dispatch<React.SetStateAction<Item[]>>, speed: number) => {
  let currentList = [...list]
  let stepSize = Math.floor(currentList.length / 2)
  while (stepSize >= 1) {
    for (let origin = 0; origin < stepSize; origin++) {
      for (let i = origin; i < currentList.length; i += stepSize) {
        const current = currentList[i]
        current.state = BarState.Current

        let previous = i - stepSize
        while (previous >= 0) {
          currentList[previous].state = BarState.Pivot
          let checked = previous
          if (currentList[previous].number > current.number) {
            checked += stepSize
            currentList[previous + stepSize] = {
              ...currentList[previous],
            }
            currentList[previous] = {
              ...current,
            }
            previous -= stepSize
          } else {
            previous = -1
          }
          setList([...currentList])
          await sleep(speed)
          currentList[checked].state = BarState.Current
        }
      }
      // eslint-disable-next-line no-loop-func
      currentList = currentList.map(({ number }) =>
        stepSize === 1 ? { number, state: BarState.Done } : { number, state: BarState.ToDo }
      )
      setList([...currentList])
    }
    stepSize = Math.floor(stepSize / 2)
  }
  return currentList
}
