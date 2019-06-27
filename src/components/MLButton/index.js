import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Button } from '@material-ui/core'

import MLButtonStyles from 'assets/jss/components/MLButtonStyles'

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

export default withStyles(MLButtonStyles)(MLButton)
