import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'

class NewsSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <Section {...rest}>
                <Container maxWidth="md">
                    <Typography variant="h3">
                        News &amp; Press
                    </Typography>
                </Container>
            </Section>
        )
    }
}

export default NewsSection