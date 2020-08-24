import React, { Component } from 'react'

import { Typography, Container, Card } from '@material-ui/core'
import Section from 'components/Section'

class ProductsSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <Section {...rest} title="Workstations">
                <Container maxWidth="md">
                    <Card>
                        <Typography variant="h6">Duet</Typography>
                    </Card>
                    <Card>
                        <Typography variant="h6">Quartet</Typography>
                    </Card>
                    <Card>
                        <Typography variant="h6">Upgrade</Typography>
                    </Card>
                </Container>
            </Section>
        )
    }
}

export default ProductsSection