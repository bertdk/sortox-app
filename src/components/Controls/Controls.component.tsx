import { Button, Grid, MenuItem, Select, Slider, StepLabel } from '@material-ui/core'
import { AlgorithmsEnum } from 'contracts/enums/Algorithms.enum'
import React from 'react'
import s from './controls.module.scss'
import cx from 'classnames'

interface Defaults {
  speed: number
  length: number
}

interface Props {
  onSort: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onRandomize: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onSlideLength: (event: React.ChangeEvent<{}>, value: number | number[]) => void
  onSlideSpeed: (event: React.ChangeEvent<{}>, value: number | number[]) => void
  algorithm: AlgorithmsEnum
  onAlgorithmChange: any
  enableControls: boolean
  defaults: Defaults
}

export const Controls = ({
  onSort,
  onRandomize,
  onSlideLength,
  algorithm,
  onAlgorithmChange,
  onSlideSpeed,
  enableControls,
  defaults,
}: Props) => (
  <div className={cx(s.controls)}>
    <Grid container spacing={3} className={cx(s.container)}>
      <Grid item className={cx(s.item)} xs={12} sm={4} md={2}>
        <div className={cx(s.control, s.withLabel)}>
          <StepLabel>Algorithm</StepLabel>
          <Select value={algorithm} onChange={onAlgorithmChange} disabled={!enableControls}>
            {Object.values(AlgorithmsEnum)
              .sort()
              .map((a) => (
                <MenuItem value={a} key={a}>
                  {a}
                </MenuItem>
              ))}
          </Select>
        </div>
      </Grid>
      <Grid item className={cx(s.item)} xs={6} sm={4} md={2}>
        <div className={s.control}>
          <Button
            variant="contained"
            color="primary"
            onClick={onSort}
            disabled={!enableControls}
            fullWidth
            id="control-button-sort"
          >
            Sort
          </Button>
        </div>
      </Grid>
      <Grid item className={cx(s.item)} xs={6} sm={4} md={2}>
        <div className={s.control}>
          <Button
            variant="contained"
            color="primary"
            onClick={onRandomize}
            disabled={!enableControls}
            fullWidth
            id="control-button-randomize"
          >
            Randomize
          </Button>
        </div>
      </Grid>

      <Grid item className={cx(s.item)} xs={12} sm={6} md={3}>
        <div className={cx(s.control, s.withLabel)}>
          <StepLabel>List length</StepLabel>
          <Slider
            step={5}
            min={5}
            max={100}
            defaultValue={defaults.length}
            onChange={onSlideLength}
            marks={true}
            disabled={!enableControls}
            valueLabelDisplay="auto"
          />
        </div>
      </Grid>

      <Grid item className={cx(s.item)} xs={12} sm={6} md={3}>
        <div className={cx(s.control, s.withLabel)}>
          <StepLabel>Algorithm slow down</StepLabel>
          <Slider
            step={50}
            min={0}
            max={1000}
            defaultValue={defaults.speed}
            onChange={onSlideSpeed}
            marks={true}
            disabled={!enableControls}
          />
        </div>
      </Grid>
    </Grid>
  </div>
)
