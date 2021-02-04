import { BarState } from 'contracts/enums/BarStatus.enum'

export interface Item {
  number: number
  state: BarState
}
