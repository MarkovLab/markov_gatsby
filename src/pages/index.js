import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { LandingLayout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'

class Index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Markov Lab</title>
          <meta name="description" content="Markov Lab, Inc" />
          <meta name="author" content="Richard Kim" />
          <meta
            name="keywords"
            content="Deep Learning, Workstations, Artificial Intelligence, GPU"
          />
        </Helmet>
        <LandingLayout>
          <HeaderSection id="header" />
        </LandingLayout>
      </>
    )
  }
}

export default Index
