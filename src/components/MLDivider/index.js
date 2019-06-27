import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import MLIcon from 'components/MLIcon'

import MLDividerStyles from 'assets/jss/components/MLDividerStyles'

const MLDivider = ({ classes, dark }) => {
  const lineStyle = {
    borderBottomColor: dark ? '#757575' : '#fafafa',
  }
  return (
    <div className={classes.divider}>
      <div className={classes.line} style={lineStyle} />
      <MLIcon color={dark ? '#757575' : '#fafafa'} fontSize="large" />
      <div className={classes.line} style={lineStyle} />
    </div>
  )
}

export default withStyles(MLDividerStyles)(MLDivider)
