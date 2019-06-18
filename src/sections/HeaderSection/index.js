import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Button } from '@material-ui/core'

import Parallax from 'components/Parallax'
import MLButton from 'components/MLButton'
import parallaxBg from 'assets/images/background/bg4.jpg'

import Context from 'context'

const styles = theme => {
  return {
    section: {
      height: '90vh',
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
  }
}

const HeaderSection = ({ classes, ...rest }) => {
  return (
    <Parallax image={parallaxBg} {...rest}>
      <Grid container spacing={2} justify="center">
        <Grid
          item
          xs={11}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" color="inherit" className={classes.slogan}>
            Expanding global investment opportunities with artificial
            intelligence
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.slogan}
          >
            Expanding global investment opportunities with artificial
            intelligence
          </Typography>

          <Context.Consumer>
            {({ setSection }) => (
              <div>
                <MLButton
                  size="large"
                  style={{ width: 200, margin: '25px 5px 25px 5px' }}
                  onClick={() => setSection('about')}
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
            )}
          </Context.Consumer>
        </Grid>
      </Grid>
    </Parallax>
  )
}

export default withStyles(styles)(HeaderSection)
