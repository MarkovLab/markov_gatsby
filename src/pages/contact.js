import React, { Component } from 'react'

import { Typography, Container, Grid, Fade } from "@material-ui/core"

import Section from 'components/Section'
import { LandingLayout } from 'components/Layout'
import ContactForm from 'components/ContactForm'

import HeaderSection from 'sections/HeaderSection'

import bg from 'assets/images/background/bg2.jpg'

class ContactPage extends Component {

  render() {
    return (
      <LandingLayout>
        <HeaderSection
          image={bg} 
          title="Contact Us"
          subtitle="We're here to help. 
            Please connect us and let us help you maximize 
            your organization's AI/Machine Learning potential."
          shaded
        />
        <Section hcenter>
          <ContactForm />
        </Section>
      </LandingLayout>
    )
  }
}

export default ContactPage