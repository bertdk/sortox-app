import { Button, Slider } from '@material-ui/core'
import React from 'react'
import s from './controls.module.scss'

export interface Props {
  onSort: any
  onRandomize: any
  onSlide: any
}

export const Controls = ({ onSort, onRandomize, onSlide }: Props) => (
  <div className={s.controls}>
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
