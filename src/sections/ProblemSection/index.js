import React from 'react'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import Section from 'components/Section'
import Testimonial from 'components/Testimonial'

import bg from 'assets/images/background/bg5.jpg'

import japanImage from 'assets/images/background/bg2.jpg'

const styles = theme => ({
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  imgRounded: {
    borderRadius: '6px !important',
  },
})

const ProblemSection = ({ classes, ...rest }) => {
  return (
    <>
      <Section title="Challenges in Investing Overseas" {...rest}>
        <Typography variant="h5" align="center">
          We enable ldjflkdjflkadjflkdaj
        </Typography>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={11} sm={4}>
            <img
              src={japanImage}
              alt="Japan"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <Typography variant="h6">Language Barrier</Typography>
            <Typography variant="body1">Lore</Typography>
          </Grid>
          <Grid item xs={11} sm={7}>
            <Typography variant="h6">Language Barrier</Typography>
            <Typography variant="body1">Lore</Typography>
          </Grid>
          <Grid item xs={11} sm={4}>
            <img
              src={japanImage}
              alt="Japan"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={4}>
            <img
              src={japanImage}
              alt="Japan"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <Typography variant="h6">Language Barrier</Typography>
            <Typography variant="body1">Lore</Typography>
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
