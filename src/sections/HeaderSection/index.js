import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Fade } from '@material-ui/core'

import Parallax from 'components/Parallax'
import MLButton from 'components/MLButton'
import Section from 'components/Section'

import bg from 'assets/images/background/bg4.jpg'

import Context from 'context'

const styles = theme => {
  return {
    section: {
      height: '100vh',
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
    slogan: {
      marginBottom: 10,
    },
    subSlogan: {
      marginBottom: 10,
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
        <Fade in={fadeIn} timeout={1000}>
          <Typography variant="h3" color="inherit" className={classes.slogan}>
            Expanding global investment opportunities
          </Typography>
        </Fade>
        <Fade in={fadeIn} timeout={2000}>
          <Typography variant="h6" color="inherit" className={classes.slogan}>
            Enabling analysis of previously un-investable class of equities with
            artificial intelligence
          </Typography>
        </Fade>
        <Context.Consumer>
          {({ setSection }) => (
            <div>
              <Fade in={fadeIn} time={2000}>
                <MLButton
                  size="large"
                  style={{ width: 200, margin: '25px 5px 25px 5px' }}
                  onClick={() => setSection('mission')}
                >
                  Learn More
                </MLButton>
              </Fade>
              <Fade in={fadeIn} time={2000}>
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
      </Section>
    )
  }
}

export default withStyles(styles)(HeaderSection)
