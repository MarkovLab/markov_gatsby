import React from 'react'

import { Container, Grid, Typography } from "@material-ui/core"

import LandingLayout from './LandingLayout'


const BlogLayout = ({header, children }) => {
  return (
    <LandingLayout>
      {header}
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid xs={12} sm={2}>
            <Typography variant="h6">
              Topics
            </Typography>
          </Grid>
          <Grid xs={12} sm={10}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </LandingLayout>
  )
}

export default BlogLayout