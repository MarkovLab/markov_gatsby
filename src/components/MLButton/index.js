import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Button } from '@material-ui/core'

import mlbuttonStyle from 'assets/jss/components/mlbuttonStyle';

const MLButton = ({ classes, filled, children, ...rest }) => {
  
  const buttonClass = classNames(
    classes.button,
    { [classes.filled]: filled }
  )

  return (
    <Button
      variant="outlined"
      className={buttonClass}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default withStyles(mlbuttonStyle)(MLButton)
