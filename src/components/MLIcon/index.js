import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { SvgIcon } from '@material-ui/core'

const styles = theme => {
  return {
    black: {
      fill: 'black',
      stroke: 'black',
      strokeWidth: 11,
    },
  }
}

const MLIconMain = ({ classes, fontSize, color }) => (
  <SvgIcon viewBox="0 0 250 250" fontSize={fontSize}>
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color,
      }}
      d="M226.52,160.12a104,104,0,0,0-47-112.48A4,4,0,1,0,175,54.3l.29.18a96.08,96.08,0,0,1,43.67,102.86,28.16,28.16,0,1,0,7.6,2.78ZM213.18,205a20.13,20.13,0,1,1,20.12-20.13A20.12,20.12,0,0,1,213.18,205Z"
    />
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color,
      }}
      d="M161.63,225.8A96.42,96.42,0,0,1,56.39,204.6h0A28.06,28.06,0,1,0,50,209.5h0A104.4,104.4,0,0,0,164.7,233.22a4,4,0,0,0-3.07-7.42ZM16.28,184.88A20.12,20.12,0,1,1,36.4,205a20.12,20.12,0,0,1-20.12-20.12Z"
    />
    <path
      className={classes.black}
      style={{
        fill: color,
        stroke: color,
      }}
      d="M24.31,133.5h.29a4,4,0,0,0,4-3.74A96,96,0,0,1,97.8,44.12a28.1,28.1,0,1,0-1.15-8,103.94,103.94,0,0,0-76.06,93.1A4,4,0,0,0,24.31,133.5ZM124.78,16.1a20.13,20.13,0,1,1-20.13,20.13A20.12,20.12,0,0,1,124.78,16.1Z"
    />
  </SvgIcon>
)

export default withStyles(styles)(MLIconMain)
