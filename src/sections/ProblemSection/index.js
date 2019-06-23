import React from 'react'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import Section from 'components/Section'
import Testimonial from 'components/Testimonial'

import japan from 'assets/images/stock/japan.jpg'
import tse from 'assets/images/stock/tse.jpg'
import europe from 'assets/images/stock/europe.jpg'
import bg from 'assets/images/background/bg5.jpg'

const styles = theme => ({
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  imgRounded: {
    borderRadius: '6px !important',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const ProblemSection = ({ classes, ...rest }) => {
  return (
    <>
      <Section
        title="Challenges in Investing Overseas"
        subtitle="Why is investing"
        {...rest}
      >
        <Grid container justify="center" spacing={3}>
          <Grid item xs={11} sm={4} className={classes.center}>
            <img
              src={japan}
              alt="Japan"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={7} className={classes.center}>
            <Typography variant="h5" color="secondary" gutterBottom>
              Language Barrier
            </Typography>
            <Typography variant="body1">Lore</Typography>
          </Grid>
          <Grid item xs={11} sm={7} className={classes.center}>
            <Typography variant="h5" color="secondary" gutterBottom>
              Sparse Sell-side Coverage
            </Typography>
            <Typography variant="body1">Lore</Typography>
          </Grid>
          <Grid item xs={11} sm={4} className={classes.center}>
            <img
              src={tse}
              alt="Tokyo Stock Exchange"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={4} className={classes.center}>
            <img
              src={europe}
              alt="European Union"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={7} className={classes.center}>
            <Typography variant="h5" color="secondary" gutterBottom>
              Regulatory Changes
            </Typography>
            <Typography variant="body1">
              Markets in Financial Instruments Directive II (MiFID II)
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Testimonial
        statement={
          "Small-cap Japanese companies are 'out of reach' for wider investment community in the West.  This opens up many opportunities for investors who can properly access this segment of the market."
        }
        source={'Daniel Brandt, Mitsubishi UFJ Securities Americas'}
        image={bg}
      />
    </>
  )
}

export default withStyles(styles)(ProblemSection)
