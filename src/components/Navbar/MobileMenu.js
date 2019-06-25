import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Context from 'context'

const styles = theme => {
  return {
    iconButton: {
      marginRight: 10,
    },
    list: {
      width: 250,
      paddingTop: 25,
    },
    listItemText: {
      primaryTypographyProps: {
        fontFamily: theme.typography.title.fontFamily,
      },
    },
    drawer: {
      backgroundColor: 'gray',
    },
    listItemText: {
      color: theme.palette.secondary.main,
      fontFamily: 'Hammersmith One',
    },
  }
}

class MobileMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    this.setState({ open: !this.state.open })
  }

  handleClick = (section, callBack) => () => {
    this.setState({ open: false })
    callBack(section)
  }

  render() {
    const { open } = this.state
    const { classes } = this.props

    const primaryTypographyProps = {
      className: classes.listItemText,
    }

    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <IconButton
              color="secondary"
              onClick={this.toggleDrawer}
              className={classes.iconButton}
            >
              <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={this.toggleDrawer}
              onOpen={this.toggleDrawer}
            >
              <List className={classes.list}>
                <ListItem button>
                  <ListItemText
                    primary="Home"
                    key="home"
                    onClick={this.handleClick('home', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Mission"
                    key="mission"
                    onClick={this.handleClick('mission', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Challenges"
                    key="challenges"
                    onClick={this.handleClick('challenges', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="AI Solution"
                    key="solution"
                    onClick={this.handleClick('solution', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Request Demo"
                    key="demo"
                    onClick={this.handleClick('demo', setSection)}
                    primaryTypographyProps={primaryTypographyProps}
                  />
                </ListItem>
              </List>
            </SwipeableDrawer>
          </>
        )}
      </Context.Consumer>
    )
  }
}

export default withStyles(styles)(MobileMenu)
