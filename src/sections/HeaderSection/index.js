import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Button } from '@material-ui/core'

import Parallax from 'components/Parallax'

import parallaxBg from 'assets/images/background/bg4.jpg'

const styles = theme => {
  return {
    section: {
      minHeight: 350,
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
  }
}

const HeaderSection = ({ classes }) => {
  return (
    <Parallax image={parallaxBg}>
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
          <Typography variant="h1" color="inherit" className={classes.slogan}>
            Expanding global investment opportunities with artificial
            intelligence
          </Typography>
          <div>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              style={{
                width: 200,
                borderWidth: 5,
                borderColor: 'white',
                color: 'white',
                margin: '25px 5px 25px 5px',
              }}
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              href="/#request-demo"
              style={{
                width: 200,
                borderWidth: 5,
                borderColor: 'white',
                color: 'white',
                margin: '25px 5px 25px 5px',
              }}
            >
              Request Demo
            </Button>
          </div>
        </Grid>
      </Grid>
    </Parallax>
  )
}

export default withStyles(styles)(HeaderSection)
