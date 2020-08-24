import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { LandingLayout } from 'components/Layout'

import MasterHeaderSection from 'sections/MasterHeaderSection'
import BenefitsSection from 'sections/BenefitsSection'
import ProductsSection from 'sections/ProductsSection'
import DiscountSection from 'sections/DiscountSection'
import BlogSection from 'sections/BlogSection'
import FAQSection from 'sections/FAQSection'
import ContactSection from 'sections/ContactSection'

import Context from 'context'


const SECTIONS = [
  'header',
  'benefits',
]


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 'header',
      setSection: this.setSection,
      yCoordinates: SECTIONS.reduce((obj, item) => {
        obj[item] = 0
        return obj
      }, {})
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(
      function() {
        this.handleResize()
      }.bind(this),
      1000
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const { yCoordinates } = this.state
    Object.keys(yCoordinates).forEach(section => {
      const dom = document.getElementById(section)
      this.setState(prevState => ({
        ...prevState,
        yCoordinates: {
          ...prevState.yCoordinates,
          [section]: dom.offsetTop
        }
      }))
    })
  }

  setSection = section => {
    this.setState({ section })

    const navBar = document.getElementById('navbar')
    window.scrollTo({
      top: this.state.yCoordinates[section] - navBar.offsetHeight,
      behavior: 'smooth'
    })
  }

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
        <Context.Provider value={this.state}>
          <LandingLayout>
            <MasterHeaderSection id="header" />
            <BenefitsSection id="benefits" shaded center />
            <ProductsSection id="products" />
            <DiscountSection id="discount" shaded />
            <BlogSection id="blog" />
            <FAQSection id="faq" shaded  />
            <ContactSection id="contact" />
          </LandingLayout>
        </Context.Provider>
      </>
    )
  }
}

export default Index
