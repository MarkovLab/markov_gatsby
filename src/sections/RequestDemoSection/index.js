import React from 'react'
import { Grid } from '@material-ui/core'

import Section from 'components/Section'
import RequestForm from 'components/RequestForm'

import bg from 'assets/images/background/bg7.jpg'

const RequestDemoSection = ({ ...rest }) => (
  <Section
    image={bg}
    shaded
    {...rest}
    title="Request a Demo"
    subtitle="Interested in trying out Andrey? Request a demo account by signing up below"
  >
    <Grid container spacing={2} justify="center">
      <Grid item xs={11} sm={9} md={7}>
        <RequestForm />
      </Grid>
    </Grid>
  </Section>
)

export default RequestDemoSection
