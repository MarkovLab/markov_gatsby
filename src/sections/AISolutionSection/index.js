import React, { Component } from 'react'
import Section from 'components/Section'

import DescriptionBlock from './DescriptionsBlock'
import BenefitsBlock from './BenefitsBlock'

class AISolutionSection extends Component {
  render() {
    const { ...rest } = this.props

    return (
      <Section
        title="A New Paradigm"
        subtitle="Reimagine international equity research with the power of artificial intelligence"
        {...rest}
      >
        <DescriptionBlock />
        <BenefitsBlock />
      </Section>
    )
  }
}

export default AISolutionSection
