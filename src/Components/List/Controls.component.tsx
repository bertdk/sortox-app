import { Button, MenuItem, Select, Slider } from '@material-ui/core'
import React from 'react'
import s from './controls.module.scss'

export enum AlgorithmsEnum {
  selection = 'Selection',
}

export interface Props {
  onSort: any
  onRandomize: any
  onSlide: any
  algorithm: AlgorithmsEnum
  onAlgorithmChange: any
}

export const Controls = ({
  onSort,
  onRandomize,
  onSlide,
  algorithm,
  onAlgorithmChange,
}: Props) => (
  <div className={s.controls}>
    <div className={s.control}>
      <Select value={algorithm} onChange={onAlgorithmChange}>
        <MenuItem value={AlgorithmsEnum.selection}>
          {AlgorithmsEnum.selection}
        </MenuItem>
      </Select>
    </div>
    <div className={s.control}>
      <Button variant="contained" color="primary" onClick={onSort}>
        Sort
      </Button>
    </div>
    <div className={s.control}>
      <Button variant="contained" color="primary" onClick={onRandomize}>
        Randomize
      </Button>
    </div>
    <div className={s.control}>
      <Slider step={5} min={2} max={100} onChange={onSlide} marks={true} />
    </div>
  </div>
)
