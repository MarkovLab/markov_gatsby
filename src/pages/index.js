import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { LandingLayout } from 'components/Layout'

import HeaderSection from 'sections/HeaderSection'
import AboutSection from 'sections/AboutSection'
import ProblemSection from 'sections/ProblemSection'
import AISolutionSection from 'sections/AISolutionSection'
import RequestDemoSection from 'sections/RequestDemoSection'

import Context from 'context'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      section: 'header',
      setSection: this.setSection,
      yCoordinates: {
        header: 0,
        about: 0,
        problem: 0,
        solution: 0,
        value: 0,
        demo: 0,
      },
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
    const sections = ['header', 'mission', 'challenges', 'solution', 'demo']
    sections.forEach(section => {
      const dom = document.getElementById(section)
      this.setState(prevState => ({
        ...prevState,
        yCoordinates: {
          ...prevState.yCoordinates,
          [section]: dom.offsetTop,
        },
      }))
    })
  }

  setSection = section => {
    this.setState({ section })

    const navBar = document.getElementById('navbar')

    window.scrollTo({
      top: this.state.yCoordinates[section] - navBar.offsetHeight,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Markov Lab - Artficial Intelligence</title>
          <meta name="description" content="Markov Lab Inc" />
          <meta
            name="keywords"
            content="artificial intelligence, international investments, equity research, finance"
          />
          <meta name="author" content="Richard Kim" />
        </Helmet>

        <Context.Provider value={this.state}>
          <LandingLayout>
            <HeaderSection id="header" />
            <AboutSection id="mission" />
            <ProblemSection id="challenges" />
            <AISolutionSection id="solution" />
            <RequestDemoSection id="demo" />
          </LandingLayout>
        </Context.Provider>
      </div>
    )
  }
}

export default Index
