import { Button, MenuItem, Select, Slider } from '@material-ui/core'
import React from 'react'
import s from './controls.module.scss'

export enum AlgorithmsEnum {
  selection = 'Selection',
  insertion = 'Insertion',
}

export interface Props {
  onSort: any
  onRandomize: any
  onSlideLength: any
  onSlideSpeed: any
  algorithm: AlgorithmsEnum
  onAlgorithmChange: any
  enableControls: boolean
}

export const Controls = ({
  onSort,
  onRandomize,
  onSlideLength,
  algorithm,
  onAlgorithmChange,
  onSlideSpeed,
  enableControls,
}: Props) => (
  <div className={s.controls}>
    <div className={s.control}>
      <Select
        value={algorithm}
        onChange={onAlgorithmChange}
        disabled={!enableControls}
      >
        <MenuItem value={AlgorithmsEnum.selection}>
          {AlgorithmsEnum.selection}
        </MenuItem>
        <MenuItem value={AlgorithmsEnum.insertion}>
          {AlgorithmsEnum.insertion}
        </MenuItem>
      </Select>
    </div>
    <div className={s.control}>
      <Button
        variant="contained"
        color="primary"
        onClick={onSort}
        disabled={!enableControls}
      >
        Sort
      </Button>
    </div>
    <div className={s.control}>
      <Button
        variant="contained"
        color="primary"
        onClick={onRandomize}
        disabled={!enableControls}
      >
        Randomize
      </Button>
    </div>
    <div className={s.control}>
      <Slider
        step={5}
        min={2}
        max={100}
        onChange={onSlideLength}
        marks={true}
        disabled={!enableControls}
      />
    </div>
    <div className={s.control}>
      <Slider
        step={10}
        min={10}
        max={100}
        onChange={onSlideSpeed}
        marks={true}
        disabled={!enableControls}
      />
    </div>
  </div>
)
