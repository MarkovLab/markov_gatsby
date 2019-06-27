import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography } from '@material-ui/core'

import Section from 'components/Section'

import AboutSectionStyles from 'assets/jss/sections/AboutSectionStyles'

const AboutSection = ({ classes, ...rest }) => {
  return (
    <Section title="Mission" {...rest} shaded>
      <div className={classes.missionBox}>
        <Typography variant="h5" align="center">
          We expand investment opportunities in global equities markets for
          institutional investors by enabling analysis of companies that are
          considered "out of reach" using traditional fundamental analysis.
        </Typography>
      </div>
    </Section>
  )
}

export default withStyles(AboutSectionStyles)(AboutSection)
