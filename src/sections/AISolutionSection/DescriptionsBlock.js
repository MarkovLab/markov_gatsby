import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import nlp from 'assets/images/icons/nlp.png'
import report from 'assets/images/icons/report.png'
import prediction from 'assets/images/icons/prediction.png'
import machinelearning from 'assets/images/icons/machinelearning.png'
import crawl from 'assets/images/icons/crawl.png'
import andrey from 'assets/images/icons/andrey.png'

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
              <img src={andrey} alt="Andrey" className={classes.cardImage} />
              <Typography variant="h6" color="secondary">
                Andrey - AI Analyst
              </Typography>
              <Typography variant="body2">
                Meet the world's first AI analyst, Andrey. Andrey is built with
                the latest artificial intelligence technology developed by
                researchers from MIT and Harvard.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={crawl}
                alt="Crawling Web"
                className={classes.cardImage}
              />
              <Typography variant="h6" color="secondary">
                24 Hour Monitoring
              </Typography>
              <Typography variant="body2">
                Andrey crawls and monitors the web 24 hours a day, 7 days a week
                to detect the latest quarterly / annual results from companies
                and relevant news articles.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img src={nlp} alt="Reading" className={classes.cardImage} />
              <Typography variant="h6" color="secondary">
                Identify Key Sections
              </Typography>
              <Typography variant="body2">
                Andrey reads processes the new financial results using natural
                language processing (NLP) techniques and identifies key segments
                of the reports to summarize and translate in seconds using
                machine translation.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={machinelearning}
                alt="Deep Learning"
                className={classes.cardImage}
              />
              <Typography variant="h6" color="secondary">
                Powered by Deep Learning and Bayesian Learning
              </Typography>
              <Typography variant="body2">
                Andrey is powered by the latest, cutting-edge AI technologies –
                Deep Learning models and Bayesian inference techniques, which
                are inspired by biological processes of neural networks and
                human cognition.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img
                src={prediction}
                alt="Prediction"
                className={classes.cardImage}
              />
              <Typography variant="h6" color="secondary">
                Projects & Valuations
              </Typography>
              <Typography variant="body2">
                Based on the historical financial results of the company as well
                as its industry peers, Andrey makes financial projections
                including revenue, earnings, and cash flow. Based on these
                projections, Andrey builds customizable DCF valuation models.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <img src={report} alt="Report" className={classes.cardImage} />
              <Typography variant="h6" color="secondary">
                Summary Report
              </Typography>
              <Typography variant="body2">
                Based on the latest results, management discussions, and a
                historical financial database, Andrey produces customized
                summary reports in English (or another preferred language) for
                companies that you track.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(BenefitsBlock)
