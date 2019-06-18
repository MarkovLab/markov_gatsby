import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  parallax: {
    height: '100vh',
    width: '100%',
    maxHeight: '1600px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    zIndex: '2',
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
})

class Parallax extends React.Component {
  render() {
    const { classes, children, image, ...rest } = this.props
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={classes.parallax}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Parallax)
