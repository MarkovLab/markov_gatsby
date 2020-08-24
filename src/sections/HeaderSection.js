import React, { Component } from 'react'

import { Typography, Container, Grid, Fade } from "@material-ui/core"

import Section from 'components/Section'

class HeaderSection extends Component {

  render() {
    const { title, shaded, subtitle, image } = this.props

    return (
      <Section image={image} shaded={shaded} halfScreen vcenter>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={7}>
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">{title}</Typography>
              </Fade>
              <Fade in={true} timeout={2000}>
                <Typography variant="h6">
                  {subtitle}
                </Typography>
              </Fade>
            </Grid>  
          </Grid>
        </Container>
      </Section>
    )
  }
}

export default HeaderSection