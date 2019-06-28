import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'

const BlogPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const BlogMainPage = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.content}>
        <Typography variant="h1">Blog</Typography>
      </div>
    </Layout>
  )
}

export default withStyles(BlogPageStyles)(BlogMainPage)
