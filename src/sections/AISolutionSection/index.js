import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

const styles = theme => {
  return {
    section: {
      minHeight: 350,
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
  }
}

const AISolutionSection = ({ classes }) => {
  return (
    <section className={classes.section}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={11}>
          <Typography variant="h1">AI Solution Section</Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(AISolutionSection)
