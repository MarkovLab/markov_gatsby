import React, { Component } from 'react'
import Section from 'components/Section'

import DescriptionBlock from './DescriptionsBlock'
import BenefitsBlock from './BenefitsBlock'

class AISolutionSection extends Component {
  render() {
    const { ...rest } = this.props

    return (
      <Section
        title="AI Enabled Financial Analysis"
        subtitle="This is subtitle"
        {...rest}
      >
        <DescriptionBlock />
        <BenefitsBlock />
      </Section>
    )
  }
}

export default AISolutionSection
