import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core'

import MLIcon from 'components/MLIcon'

const MLLogoStyles = theme => ({
  box: {
    display: 'flex',
    alignItems: 'center',
    border: '3px solid #fff',
    padding: '5px',
  },
  name: {
    color: theme.palette.primary.contrastText,
    margin: '0 10px',
  },
})

const MLLogo = ({ classes }) => {
  return (
    <div className={classes.box}>
      <MLIcon color="white" fontSize="large" />
      <Typography variant="h5" className={classes.name}>
        Markov Lab
      </Typography>
    </div>
  )
}

export default withStyles(MLLogoStyles)(MLLogo)
