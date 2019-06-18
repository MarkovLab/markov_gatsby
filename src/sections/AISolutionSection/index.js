import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import bg from 'assets/images/background/bg9.jpg'

const styles = theme => {
  return {
    section: {
      height: '90vh',
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
    AISolution: {
      zIndex: 2,
      minHeight: 350,
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    shaded: {
      '&:after': {
        background: 'rgb(0, 0, 0)',
        opacity: 0.4,
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        display: 'block',
        left: '0',
        top: '0',
        content: "''",
      },
    },
    white: {
      color: 'white',
    },
  }
}

const AISolutionSection = ({ classes, ...rest }) => {
  return (
    <section
      className={classNames(
        classes.section,
        classes.AISolution,
        classes.shaded,
        classes.white
      )}
      {...rest}
    >
      <Grid container spacing={2} justify="center">
        <Grid item xs={11}>
          <Typography variant="h3">AI Solution</Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(AISolutionSection)
