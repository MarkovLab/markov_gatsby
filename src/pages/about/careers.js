import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'

const CareerPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const CareersPage = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.content}>
        <Typography variant="h1">Careers</Typography>
      </div>
    </Layout>
  )
}

export default withStyles(CareerPageStyles)(CareersPage)
