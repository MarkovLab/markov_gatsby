import React from 'react'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid } from '@material-ui/core'

import MLDivider from 'components/MLDivider'

const styles = theme => ({
  section: {
    display: 'flex',
    padding: '45px 0',
    position: 'relative',
  },
  shaded: {
    color: 'white',
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
  },
  fullScreen: {
    height: '100vh',
  },
  image: {
    zIndex: 2,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '&:after': {
      background: 'rgb(0, 0, 0)',
      opacity: 0.5,
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: '1.3rem',
    fontWeight: 500,
    fontStyle: 'oblique',
  },
  center: {
    justifyContent: 'center',
  },
})

const Section = ({
  classes,
  children,
  shaded,
  title,
  subtitle,
  image,
  fullScreen,
  center,
  ...rest
}) => {
  const sectionClass = clsx(classes.section, {
    [classes.shaded]: shaded,
    [classes.image]: image ? true : false,
    [classes.fullScreen]: fullScreen,
  })
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
              <Typography variant="body1" className={classes.subtitle}>
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

export default withStyles(styles)(Section)
