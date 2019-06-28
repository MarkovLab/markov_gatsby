import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'
import Section from 'components/Section'

const TeamPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const TeamPage = ({ classes }) => {
  return (
    <Layout>
      <Section fullScreen title="Leadership Team"></Section>
    </Layout>
  )
}

export default withStyles(TeamPageStyles)(TeamPage)
