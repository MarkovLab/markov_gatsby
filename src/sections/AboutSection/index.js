import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

const styles = theme => {
  return {
    section: {
      height: '90vh',
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
  }
}

const AboutSection = ({ classes, ...rest }) => {
  return (
    <section className={classes.section} {...rest}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={11}>
          <Typography variant="h3">About Section</Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(AboutSection)
