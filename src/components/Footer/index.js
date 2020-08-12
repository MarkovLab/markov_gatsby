import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography, Link } from '@material-ui/core'

import footerStyle from 'assets/jss/components/footerStyle'

const Footer = ({ classes }) => {
  const dt = new Date();
  return  (
    <div className={classes.footer}>
    <Container className={classes.contact}>
      <Typography variant="body1">
        &copy; {dt.getFullYear()} Markov Lab. All rights reserved.
      </Typography>
      <Link href="mailto:info@markovlab.ai" variant="body1" color="inherit">
        info@markovlab.ai
      </Link>
    </Container>
  </div>
  )
}

export default withStyles(footerStyle)(Footer)
