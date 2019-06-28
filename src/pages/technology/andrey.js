import React from 'react'

import { Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'
import Section from 'components/Section'

import bg from 'assets/images/background/bg8.jpg'

const AndreyPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const AndreyPage = ({ classes }) => {
  return (
    <Layout>
      <Section
        image={bg}
        shaded
        center
        fullScreen
        title="Andrey"
        subtitle="World's First AI Analyst"
      ></Section>
      <Section>
        <Typography variant="h1">Andrey</Typography>
      </Section>
    </Layout>
  )
}

export default withStyles(AndreyPageStyles)(AndreyPage)
