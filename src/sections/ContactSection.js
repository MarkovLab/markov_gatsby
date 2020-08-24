import React, { Component } from 'react'

import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'
import ContactForm from 'components/ContactForm'

class ContactSection extends Component {
    render() {
        const { classes, ...rest } = this.props
        return (
            <Section 
                {...rest} 
                title="Contact Us" 
                subtitle="We're here to help. 
                        Please connect us and let us help you maximize 
                        your organization's AI/Machine Learning potential.">
                <Container maxWidth="md">
                    <ContactForm />
                </Container>
            </Section>
        )
    }
}

export default ContactSection