import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Fade, Container } from '@material-ui/core'

import MLButton from 'components/MLButton'
import Section from 'components/Section'

import bg from 'assets/images/background/bg4.jpg'

import Context from 'context'

const styles = theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
}

class HeaderSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fadeIn: false,
    }
  }

  componentDidMount() {
    this.setState({
      fadeIn: true,
    })
  }

  render() {
    const { fadeIn } = this.state
    const { classes, ...rest } = this.props
    return (
      <Section image={bg} {...rest} shaded fullScreen center>
        <Container maxWidth="md" className={classes.container}>
          <Fade in={fadeIn} timeout={2000}>
            <Typography variant="h3" color="inherit" gutterBottom>
              Expand your Investment Universe
            </Typography>
          </Fade>
          <Fade in={fadeIn} timeout={2000}>
            <Typography variant="h3" color="inherit" gutterBottom>
              powered by Artificial Intelligence
            </Typography>
          </Fade>
          <Fade in={fadeIn} timeout={3000}>
            <Typography variant="h6" color="inherit" gutterBottom>
              A new way to analyze equities in Japan and Emerging Markets
            </Typography>
          </Fade>

          <Context.Consumer>
            {({ setSection }) => (
              <Fade in={fadeIn} timeout={3000}>
                <div>
                  <MLButton
                    size="large"
                    style={{ width: 200, margin: '25px 5px 25px 5px' }}
                    onClick={() => setSection('mission')}
                  >
                    Learn More
                  </MLButton>
                  <MLButton
                    size="large"
                    style={{ width: 200, margin: '25px 5px 25px 5px' }}
                    onClick={() => setSection('demo')}
                  >
                    Request Demo
                  </MLButton>
                </div>
              </Fade>
            )}
          </Context.Consumer>
        </Container>
      </Section>
    )
  }
}

export default withStyles(styles)(HeaderSection)
