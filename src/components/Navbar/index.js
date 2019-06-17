import React from 'react'
import { Link as RouterLink } from 'gatsby'
import { compose } from 'recompose'

import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Hidden,
  Button,
} from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'

import Logo from '../../assets/images/logos/ml-logo.svg'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    height: '75%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(6),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 220,
      },
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignSelf: 'center',
  },
  logo: {
    width: 170,
    alignSelf: 'center',
  },
})

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.leftContainer}>
              <Link to="/" component={RouterLink} className={classes.logoLink}>
                <img src={Logo} className={classes.logo} alt="Markov Lab" />
              </Link>
            </div>
          </div>
          <div className={classes.flexRow}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Barriers</Button>
            <Button color="inherit">AI Solution</Button>
            <Button color="inherit">Value</Button>
            <Button color="inherit">Request Demo</Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Navbar)
