import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'

class FAQSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <Section {...rest}>
                <Container maxWidth="md">
                    <Typography variant="h3">
                        Frequently Asked Questions
                    </Typography>
                </Container>
            </Section>
        )
    }
}

export default FAQSection