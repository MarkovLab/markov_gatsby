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
    header: {
      [theme.breakpoints.only('xs')]: {
        paddingTop: 100,
      },
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        flexDirection: 'column',
      },
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
      <Section
        image={bg}
        {...rest}
        shaded
        fullScreen
        center
        classNames={classes.header}
      >
        <Container maxWidth="md" className={classes.container}>
          <Fade in={fadeIn} timeout={2000}>
            <Typography
              variant="h3"
              color="inherit"
              gutterBottom
              align="center"
            >
              Expand your Investment Universe
            </Typography>
          </Fade>
          <Fade in={fadeIn} timeout={2000}>
            <Typography
              variant="h4"
              color="inherit"
              gutterBottom
              align="center"
            >
              powered by Artificial Intelligence
            </Typography>
          </Fade>
          <Fade in={fadeIn} timeout={3000}>
            <Typography
              variant="h6"
              color="inherit"
              gutterBottom
              align="center"
            >
              A new way to analyze equities in Japan and Emerging Markets
            </Typography>
          </Fade>

          <Context.Consumer>
            {({ setSection }) => (
              <div className={classes.buttons}>
                <Fade in={fadeIn} timeout={3000}>
                  <MLButton
                    size="large"
                    style={{ width: 200, margin: '25px 5px 25px 5px' }}
                    onClick={() => setSection('mission')}
                  >
                    Learn More
                  </MLButton>
                </Fade>
                <Fade in={fadeIn} timeout={3000}>
                  <MLButton
                    size="large"
                    style={{ width: 200, margin: '25px 5px 25px 5px' }}
                    onClick={() => setSection('demo')}
                  >
                    Request Demo
                  </MLButton>
                </Fade>
              </div>
            )}
          </Context.Consumer>
        </Container>
      </Section>
    )
  }
}

export default withStyles(styles)(HeaderSection)
