import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Button } from '@material-ui/core'

const styles = theme => {
  return {
    button: {
      fontFamily: theme.typography.title.fontFamily,
      borderWidth: 5,
      borderColor: 'white',
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        borderColor: 'white',
        borderWidth: 5,
        textDecoration: 'underline',
      },
    },
  }
}

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

export default withStyles(styles)(MLButton)
