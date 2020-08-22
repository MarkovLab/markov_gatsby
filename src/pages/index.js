import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { LandingLayout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'
import BenefitsSection from 'sections/BenefitsSection'
import ProductsSection from 'sections/ProductsSection'
import DiscountSection from 'sections/DiscountSection'
import BlogSection from 'sections/BlogSection'
import FAQSection from 'sections/FAQSection'
import ContactSection from 'sections/ContactSection'

class Index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Markov Lab</title>
          <meta name="description" content="Markov Lab, Inc" />
          <meta name="author" content="Richard Kim" />
          <meta
            name="keywords"
            content="Deep Learning, Workstations, Artificial Intelligence, GPU"
          />
        </Helmet>
        <LandingLayout>
          <HeaderSection id="header" />
          <BenefitsSection id="benefits" shaded center />
          <ProductsSection id="products" />
          <DiscountSection id="discount" shaded />
          <BlogSection id="blog" />
          <FAQSection id="faq" shaded  />
          <ContactSection id="contact" />
        </LandingLayout>
      </>
    )
  }
}

export default Index
