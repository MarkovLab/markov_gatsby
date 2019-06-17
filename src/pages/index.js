import React from 'react'
import Helmet from 'react-helmet'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'
import AboutSection from 'sections/AboutSection'
import ProblemSection from 'sections/ProblemSection'
import AISolutionSection from 'sections/AISolutionSection'
import ValuePropSection from 'sections/ValuePropSection'
import RequestDemoSection from 'sections/RequestDemoSection'

const styles = theme => {
  return {}
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Markov Lab - Artficial Intelligence</title>
          <meta name="description" content="Markov Lab Inc" />
          <meta
            name="keywords"
            content="artificial intelligence, international investments, equity research, finance"
          />
          <meta name="author" content="Richard Kim" />
        </Helmet>

        <LandingLayout>
          <HeaderSection />
          <AboutSection />
          <ProblemSection />
          <AISolutionSection />
          <ValuePropSection />
          <RequestDemoSection />
        </LandingLayout>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
