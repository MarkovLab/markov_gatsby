import React from 'react'
import clsx from 'clsx'
import { loadCSS } from 'fg-loadcss'

import { Link as RouterLink } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Grid,
  Link,
  Icon,
  Divider,
} from '@material-ui/core'

import footerStyles from 'assets/jss/components/FooterStyles'

const FullFooter = ({ classes }) => {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )
  }, [])

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" className={classes.fullFooter}>
        <Grid container spacing={2} justify="center" color="inherit">
          <Grid item sm={3} xs={12}>
            <Typography variant="h6" className={classes.linkHeader}>
              About
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/about/company" color="inherit">
                Company
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/about/team" color="inherit">
                Team
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/about/careers" color="inherit">
                Careers
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/about/contact" color="inherit">
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="h6" className={classes.linkHeader}>
              Solutions
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link
                component={RouterLink}
                to="/solutions/andrey"
                color="inherit"
              >
                Andrey
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="h6" className={classes.linkHeader}>
              Updates
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/blog" color="inherit">
                Blog
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/news" color="inherit">
                News
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="h6" className={classes.linkHeader}>
              Follow
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="#" color="inherit">
                <Icon className="fab fa-linkedin-in" />
              </Link>
            </Typography>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="#" color="inherit">
                <Icon className="fab fa-twitter" />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" className={classes.fullFooter}>
        <Grid container spacing={2} justify="center" color="inherit">
          <Grid item sm={8} xs={12}>
            <Typography variant="body1" color="inherit">
              &copy; 2019 Markov Lab Inc. All rights reserved.
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.policyLinks}>
            <Typography variant="body1" className={classes.link}>
              <Link component={RouterLink} to="/policies/terms" color="inherit">
                Terms & Conditions
              </Link>
            </Typography>{' '}
            <Typography variant="body1" className={classes.link}>
              <Link
                component={RouterLink}
                to="/policies/privacy"
                color="inherit"
              >
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default withStyles(footerStyles)(FullFooter)
