import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'gatsby'

import { Typography } from '@material-ui/core'
import { LandingLayout } from 'components/Layout'

import ErrorPageStyles from 'assets/jss/pages/ErrorPageStyles'

const NotFoundPage = ({ classes }) => (
  <LandingLayout>
    <div className={classes.container}>
      <Typography variant="body1">
        Uh oh! The page you're looking for does not exist. Click{' '}
        <Link to="/">here</Link> to go back to home page.
      </Typography>
    </div>
  </LandingLayout>
)

export default withStyles(ErrorPageStyles)(NotFoundPage)
