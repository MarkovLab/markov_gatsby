import React from 'react'

import { Typography, Container } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'

const ContactPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const ContactPage = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.content}>
        <Typography variant="h1">Contact Us</Typography>
      </div>
    </Layout>
  )
}

export default withStyles(ContactPageStyles)(ContactPage)
