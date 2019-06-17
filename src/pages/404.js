import React from 'react'
import { Link } from 'gatsby'

import { LandingLayout } from 'components/Layout'

const NotFoundPage = () => (
  <LandingLayout>
    <p>
      Uh oh! The page you're looking for does not exist. Click{' '}
      <Link to="/">here</Link> to go back to home page.
    </p>
  </LandingLayout>
)

export default NotFoundPage
