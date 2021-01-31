export const selectionSort = (list: number[], setList: any) => {
  let listToSort = list
  const sorted: number[] = []
  while (sorted.length !== list.length) {
    let found = false
    const min = Math.min(...listToSort)
    sorted.push(min)
    listToSort = listToSort.filter((n) => {
      if (!found && n === min) {
        found = true
        return false
      }
      return true
    })
    setList(sorted)
  }
  return sorted
}
