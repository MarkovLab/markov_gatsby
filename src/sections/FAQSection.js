import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'

class FAQSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <Section {...rest} title="Frequently Asked Questions (FAQ)">
                <Container maxWidth="md">
                    <Typography variant="h6">
                        Frequently Asked Questions
                    </Typography>
                </Container>
            </Section>
        )
    }
}

export default FAQSection