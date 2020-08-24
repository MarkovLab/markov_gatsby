import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Container, Grid, Typography } from "@material-ui/core"

import Section from 'components/Section'
import { LandingLayout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'

import bg from 'assets/images/background/bg4.jpg'


const FAQPageTemplate = ({
  content,
  contentComponent
}) => {
  return (
    <section>
      <Typography variant="h6">Frequently Asked Questions (FAQ)</Typography>
    </section>
  )
}

FAQPageTemplate.prototype = {
  content: PropTypes
}

const FAQPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <LandingLayout>
      <HeaderSection image={bg} shaded title="Frequently Asked Questions (FAQ)" />
      <Section>
        <Typography variant="h4">
          Frequently Asked Questions
        </Typography>
      </Section>
    </LandingLayout>
  )
}

export { FAQPageTemplate }
export default FAQPage

export const pageQuery = graphql`
  query faqPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`



