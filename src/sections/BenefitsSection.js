import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'

class BenefitsSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <>
            <Section {...rest} title="The Markov Lab Difference" />
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h6">
                        Longer Performance
                    </Typography>
                </Container>
            </Section>
            <Section shaded>
                <Container maxWidth="lg">
                    <Typography variant="h6">
                        Silence
                    </Typography>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h6">
                        Longer Lasting Equipment
                    </Typography>
                </Container>
            </Section>
            <Section shaded>
                <Container maxWidth="lg">
                    <Typography variant="h6">
                        Unparalleled Aesthetics
                    </Typography>
                </Container>
            </Section>
            </>
        )
    }
}

export default BenefitsSection