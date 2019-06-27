import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography, Link } from '@material-ui/core'

import footerStyles from 'assets/jss/components/FooterStyles'

const SimpleFooter = ({ classes }) => (
  <div className={classes.footer}>
    <Container className={classes.contact}>
      <Typography variant="body1" color="inherit">
        &copy; 2019 Markov Lab Inc. All rights reserved.
      </Typography>
      <Link href="mailto:info@markovlab.ai" variant="body1" color="inherit">
        info@markovlab.ai
      </Link>
    </Container>
  </div>
)

export default withStyles(footerStyles)(SimpleFooter)
