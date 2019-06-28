import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'
import Section from 'components/Section'

import bg from 'assets/images/background/bg11.jpg'

const CareerPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const CareersPage = ({ classes }) => {
  return (
    <Layout>
      <Section image={bg} shaded fullScreen title="Careers"></Section>
    </Layout>
  )
}

export default withStyles(CareerPageStyles)(CareersPage)
