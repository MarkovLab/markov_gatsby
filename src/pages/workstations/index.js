import React, { Component } from 'react'

import { Typography, Container, Fade } from "@material-ui/core"

import { LandingLayout } from 'components/Layout'
import Section from 'components/Section'

import bg from 'assets/images/background/bg1.jpg'


class WorkstationsPage extends Component {

  render() {
    return (
      <LandingLayout>
        <Section image={bg} shaded halfScreen vcenter>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">Workstations</Typography>
              </Fade>
            </Container>
        </Section>
        <Section>
          <Typography variant="h3">Workstations</Typography>
        </Section>
      </LandingLayout>
    )
  }
}

export default WorkstationsPage