import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'

import Section from 'components/Section'

import TestimonialStyles from 'assets/jss/components/TestimonialStyles'

const Testimonial = ({ classes, statement, source, image }) => {
  return (
    <Section image={image} shaded>
      <div className={classes.testimonialBox}>
        <Typography variant="h5" className={classes.testimonial} gutterBottom>
          "{statement}"
        </Typography>
        <Typography variant="h6">{source}</Typography>
      </div>
    </Section>
  )
}

export default withStyles(TestimonialStyles)(Testimonial)
