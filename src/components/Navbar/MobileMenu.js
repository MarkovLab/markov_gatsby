import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
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
      <StaticQuery
        query={
          graphql`
            query {
              site { 
                siteMetadata {
                  navLinks {
                    text
                    url
                    button
                  }
                } 
              } 
            }
        `}
        render={data => {
          const menu = data.site.siteMetadata.navLinks;
          return (
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
                      {menu.map(item => (
                        <ListItem button component={Link} to={item.url}>
                          <ListItemText
                            primary={item.text}
                            key={item.text}
                            primaryTypographyProps={primaryTypographyProps}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </SwipeableDrawer>
                </>
            )
          }}
      />
      )
  }
}

export default withStyles(styles)(MobileMenu)
