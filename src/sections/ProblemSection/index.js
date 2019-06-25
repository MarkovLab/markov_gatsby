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
  item1: {
    order: 1,
  },
  item2: {
    order: 2,
  },
  item3: {
    order: 3,
    [theme.breakpoints.down('sm')]: {
      order: 4,
    },
  },
  item4: {
    order: 4,
    [theme.breakpoints.down('sm')]: {
      order: 3,
    },
  },
  item5: {
    order: 5,
  },
  item6: {
    order: 6,
  },
})

const ProblemSection = ({ classes, ...rest }) => {
  return (
    <>
      <Section
        title="Challenges"
        subtitle="Hurdles in international investing for today's institutional investors"
        {...rest}
      >
        <Grid container justify="center" spacing={3}>
          <Grid
            item
            xs={11}
            sm={4}
            className={clsx(classes.center, classes.item1)}
          >
            <img
              src={japan}
              alt="Japan"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid
            item
            xs={11}
            sm={7}
            className={clsx(classes.center, classes.item2)}
          >
            <Typography variant="h5" color="secondary" gutterBottom>
              Language Barrier
            </Typography>
            <Typography variant="body1">
              In over 3,700 publicly listed companies in Japan, less than 20% of
              them publish financial results and management guidance in English.
              For small to mid-cap companies, this ratio is even lower. Without
              fluency in Japanese, overseas investors cannot directly comprehend
              the results of those companies and must rely on large sell side
              firms with expertise in Japan.
            </Typography>
          </Grid>
          <Grid
            item
            xs={11}
            sm={7}
            className={clsx(classes.center, classes.item3)}
          >
            <Typography variant="h5" color="secondary" gutterBottom>
              Sparse Sell-side Coverage
            </Typography>
            <Typography variant="body1">
              Of over 3,700 publicly listed companies in Japan, approximately
              600 companies are not followed by any sell side firm, and
              approximately 1,4000 companies are tracked by only a single sell
              side analyst. Furthermore, sell side reports in English are even
              rarer. As a result, overseas investors cannot include these
              companies in their investment universe even if they are new alpha
              opportunities.
            </Typography>
          </Grid>
          <Grid
            item
            xs={11}
            sm={4}
            className={clsx(classes.center, classes.item4)}
          >
            <img
              src={tse}
              alt="Tokyo Stock Exchange"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid
            item
            xs={11}
            sm={4}
            className={clsx(classes.center, classes.item5)}
          >
            <img
              src={europe}
              alt="European Union"
              className={clsx(classes.imgRaised, classes.imgRounded)}
            />
          </Grid>
          <Grid
            item
            xs={11}
            sm={7}
            className={clsx(classes.center, classes.item6)}
          >
            <Typography variant="h5" color="secondary" gutterBottom>
              Regulatory Changes
            </Typography>
            <Typography variant="body1">
              Markets in Financial Instruments Directive II (MiFID II), a recent
              European regulation, is reshaping the way equity research is
              distributed and consumed in Europe and in other markets. This
              regulation is expected create downward pressure in the number of
              companies covered by existing sell side firms. Japan and
              Asia-Pacific markets will not be insulated from the impact of
              MiFID II, which will lead to increased sparcity of coverage in
              these markets by existing sell side firms going forward.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Testimonial
        statement={
          "Most small-cap Japanese companies are 'out of reach' for the wider investment community.  This opens up many opportunities for investors who can properly access this segment of the market."
        }
        source={'Daniel Brandt, Mitsubishi UFJ Securities Americas'}
        image={bg}
      />
    </>
  )
}

export default withStyles(styles)(ProblemSection)
