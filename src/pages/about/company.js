import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'
import Section from 'components/Section'

import bg from 'assets/images/background/bg12.jpg'

const CompanyPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const CompanyPage = ({ classes }) => {
  return (
    <Layout>
      <Section image={bg} shaded fullScreen title="Markov Lab" center></Section>
    </Layout>
  )
}

export default withStyles(CompanyPageStyles)(CompanyPage)
