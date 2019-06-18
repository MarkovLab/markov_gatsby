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
const ValuePropSection = ({ classes, ...rest }) => {
  return (
    <section className={classes.section} {...rest}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={11}>
          <Typography variant="h3">Value Propositions</Typography>

          <div>
            Unprecedented, Comprehensive coverage of over 3,700 publicaly traded
            stocks listed in the Tokyo Stock Exchange
          </div>

          <div>Rapid and timely coverage of </div>

          <div>Cost at the fraction</div>
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(styles)(ValuePropSection)
