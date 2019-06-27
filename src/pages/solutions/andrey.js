import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'

const AndreyPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const AndreyPage = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.content}>
        <Typography variant="h1">Andrey</Typography>
      </div>
    </Layout>
  )
}

export default withStyles(AndreyPageStyles)(AndreyPage)
