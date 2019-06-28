import React from 'react'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import MLDivider from 'components/MLDivider'

import SectionStyles from 'assets/jss/components/SectionStyles'

const Section = ({
  classes,
  classNames,
  children,
  shaded,
  title,
  subtitle,
  image,
  fullScreen,
  center,
  ...rest
}) => {
  const sectionClass = clsx(
    classes.section,
    {
      [classes.shaded]: shaded,
      [classes.image]: image ? true : false,
      [classes.fullScreen]: fullScreen,
    },
    classNames
  )
  const containerClass = clsx(classes.container, {
    [classes.center]: center,
  })
  const style = {
    backgroundImage: `url(${image})`,
  }
  return (
    <section className={sectionClass} {...rest} style={style}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={11} className={containerClass}>
          {title && (
            <>
              <Typography variant="h3" gutterBottom>
                {title}
              </Typography>
              <Typography
                variant="body1"
                className={classes.subtitle}
                color={shaded ? 'inherit' : 'secondary'}
              >
                {subtitle}
              </Typography>
              <MLDivider dark={shaded ? false : true} />
            </>
          )}
          {children}
        </Grid>
      </Grid>
    </section>
  )
}

export default withStyles(SectionStyles)(Section)
