import React from 'react'

import { Typography, Container } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'
import Section from 'components/Section'

import bg from 'assets/images/background/bg10.jpg'

const ContactPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const ContactPage = ({ classes }) => {
  return (
    <Layout>
      <Section image={bg} shaded fullScreen title="Contact Us"></Section>
    </Layout>
  )
}

export default withStyles(ContactPageStyles)(ContactPage)
