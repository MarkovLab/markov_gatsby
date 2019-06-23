import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import readIcon from 'assets/images/icons/read.svg'
import reportIcon from 'assets/images/icons/report.svg'
import predictionIcon from 'assets/images/icons/prediction.svg'
import deeplearningIcon from 'assets/images/icons/deeplearning.svg'
import crawlsIcon from 'assets/images/icons/crawls.svg'
import andreyIcon from 'assets/images/icons/andrey.svg'

const styles = theme => {
  return {
    block: {
      margin: '0px 15px 35px 15px',
      display: 'block',
    },
    card: {
      padding: 35,
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
    },
    cardImage: {
      padding: 35,
      margin: 0,
      [theme.breakpoints.down('md')]: {
        padding: 25,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 15,
      },
    },
  }
}

class BenefitsBlock extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.block}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={andreyIcon}
                alt="Andrey"
                className={classes.cardImage}
              />
              <Typography variant="h6">Andrey - AI Analyst</Typography>
              <Typography variant="body2">
                Meet the world's first AI Analyst, Andrey. Andrey is built with
                the latest artificial intelligence technology developed by
                researchers from MIT and Harvard.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={crawlsIcon}
                alt="Crawling Web"
                className={classes.cardImage}
              />
              <Typography variant="h6">Monitor Financial Results</Typography>
              <Typography variant="body2">
                Andrey monitors the results of companies and provides alerts as
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img src={readIcon} alt="Reading" className={classes.cardImage} />
              <Typography variant="h6">Idenfy Key Sections</Typography>
              <Typography variant="body2">
                Andrey identifies the Natural Language Processing
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={deeplearningIcon}
                alt="Deep Learning"
                className={classes.cardImage}
              />
              <Typography variant="h6">Powered by Deep Learning</Typography>
              <Typography variant="body2">
                We leverage the latest methodologies in artificial intelligence
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={predictionIcon}
                alt="Prediction"
                className={classes.cardImage}
              />
              <Typography variant="h6">Projects & Valuations</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                hendrerit tortor nec diam gravida ornare. Sed finibus, eros sit
                amet aliquet ultricies, nulla orci elementum est, id mollis nunc
                quam nec libero.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={reportIcon}
                alt="Report"
                className={classes.cardImage}
              />
              <Typography variant="h6">Summary Report</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                hendrerit tortor nec diam gravida ornare. Sed finibus, eros sit
                amet aliquet ultricies, nulla orci elementum est, id mollis nunc
                quam nec libero.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(BenefitsBlock)
