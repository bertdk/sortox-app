import { BarState } from '../../Components/Bar/Bar.component'
import { Item } from '../../Components/List/List.component'
import { sleep } from '../../utils/sleep'

export const selectionSort = async (list: Item[], setList: any) => {
  let listToSort = list
  const sorted: Item[] = []
  while (sorted.length !== list.length) {
    let found = false

    const min = listToSort.reduce((p, c) => {
      if (c.number < p.number) {
        return c
      }
      return p
    }, listToSort[0])

    min.state = BarState.Current
    setList([...sorted, ...listToSort])
    await sleep(15)

    listToSort = listToSort.filter((n) => {
      if (!found && n.number === min.number) {
        found = true
        return false
      }
      return true
    })

    sorted.push({ number: min.number, state: BarState.Done })
    setList([...sorted, ...listToSort])
    await sleep(5)
  }
  return sorted
}
