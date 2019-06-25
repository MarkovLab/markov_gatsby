import React, { Component } from 'react'
import clsx from 'clsx'
import { loadCSS } from 'fg-loadcss'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Icon } from '@material-ui/core'
import { green, indigo, deepOrange } from '@material-ui/core/colors'

import image from 'assets/images/background/bg9.jpg'

const styles = theme => {
  return {
    block: {
      margin: '35px 15px',
      display: 'block',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    card: {
      padding: 35,
    },
    cardImage: {
      padding: 25,
      margin: 0,
    },
    benefit: {
      display: 'flex',
      marginTop: 15,
      marginBottom: 15,
    },
    iconSection: {
      width: theme.spacing(12),
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(18),
      },
    },
    icon: {
      width: '100%',
    },
    green: {
      color: green[900],
    },
    indigo: {
      color: indigo[800],
    },
    deepOrange: {
      color: deepOrange[900],
    },
    imgRaised: {
      boxShadow:
        '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
    imgRounded: {
      borderRadius: '6px !important',
    },
    paddingRight: {
      paddingRight: 25,
    },
  }
}

class DescriptionBlock extends Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.block}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom align="center">
              Why Andrey?
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.paddingRight}>
            <img
              src={image}
              alt="Deep Learning"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={2} className={classes.iconSection}>
                <Icon
                  className={clsx(
                    classes.indigo,
                    classes.icon,
                    'fas fa-th fa-2x'
                  )}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6">Coverage</Typography>
                <Typography variant="body1">
                  Unprecedented, comprehensive coverage of over 3,700 publicly
                  listed companies in Japan (additional markets coming soon!)
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.iconSection}>
                <Icon
                  className={clsx(
                    classes.deepOrange,
                    classes.icon,
                    'fas fa-clock fa-2x'
                  )}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6">Speed</Typography>
                <Typography variant="body1">
                  In contrast to human analysts and translators, Andrey
                  processes and translates company results at a breakneck speed
                  of 2 - 3 seconds.
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.iconSection}>
                <Icon
                  className={clsx(
                    classes.green,
                    classes.icon,
                    'fas fa-money-bill fa-2x'
                  )}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h6">Cost</Typography>
                <Typography variant="body1">
                  Andrey provides these benefits at a fraction of the cost of
                  subscribing to a sell side analyst.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(DescriptionBlock)
