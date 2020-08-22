import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Fade, Container, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MLButton from 'components/MLButton'
import Section from 'components/Section'
import SubscribeForm from 'components/SubscribeForm'

import bg from 'assets/images/background/bg3.jpg'

import Context from 'context'

import headerStyle from 'assets/jss/sections/headerStyle'


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
              <div className={classes.headerText}>
              <Typography
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Accelerate Machine Learning
              </Typography>
              </div>
            </Fade>
            <Fade in={fadeIn} timeout={2000}>
              <Typography
                variant="h4"
                color="inherit"
                gutterBottom
              >
                Powered of bare-metal
              </Typography>
            </Fade>
            <Fade in={fadeIn} timeout={3000}>
              <Typography
                variant="h6"
                color="inherit"
                gutterBottom
              >
                Explore a new way to invest in Japan and Emerging Markets
              </Typography>
            </Fade>
          
          <Fade in={fadeIn} timeout={3000}>
            <div className={classes.subscribe}>
              <SubscribeForm />
            </div>            
          </Fade>
          <Fade in={fadeIn} timeout={4000}>
            <div className={classes.slideDown}>
              <Typography variant="body1">Learn More</Typography>
              <IconButton aria-label="learn" color="inherit" size="medium">
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>           
          </Fade>
        </Container>
      </Section>
    )
  }
}

export default withStyles(headerStyle)(HeaderSection)
