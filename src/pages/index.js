import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { LandingLayout as Layout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'
import AboutSection from 'sections/AboutSection'
import ProblemSection from 'sections/ProblemSection'
import AISolutionSection from 'sections/AISolutionSection'
import RequestDemoSection from 'sections/RequestDemoSection'

import Context from 'context'

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Markov Lab - A new way to invest internationally</title>
          <meta name="description" content="Markov Lab Inc" />
          <meta
            name="keywords"
            content="artificial intelligence, international investments, equity research, finance"
          />
          <meta name="author" content="Richard Kim" />
        </Helmet>

        <Layout>
          <HeaderSection id="header" />
          <AboutSection id="mission" />
          <ProblemSection id="challenges" />
          <AISolutionSection id="solution" />
          <RequestDemoSection id="demo" />
        </Layout>
      </div>
    )
  }
}

export default Index
