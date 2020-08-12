import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Button, rgbToHex } from '@material-ui/core'

import mlbuttonStyle from 'assets/jss/components/mlbuttonStyle';

const MLButton = ({ classes, children, ...rest }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default withStyles(mlbuttonStyle)(MLButton)
