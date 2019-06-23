import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography, Link } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    color: 'white',
    padding: '25px 25px 25px 25px',
    backgroundColor: theme.palette.primary.main,
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Container className={classes.contact}>
      <Typography variant="body1">
        &copy; 2019 Markov Lab Inc. All rights reserved.
      </Typography>
      <Link href="mailto:info@markovlab.ai" variant="body1" color="inherit">
        info@markovlab.ai
      </Link>
    </Container>
  </div>
)

export default withStyles(styles)(Footer)
