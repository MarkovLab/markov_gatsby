import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby"

import { withStyles } from '@material-ui/core/styles'

import { Button } from '@material-ui/core'
import Context from 'context'

import MLButton from 'components/MLButton'

import desktopmenuStyle from 'assets/jss/components/desktopmenuStyle'

class DesktopMenu extends Component {
  render() {
    const { classes} = this.props
    return (
      <StaticQuery
        query={
          graphql`
          query NavbarQuery {
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
          `
        }
        render={data => {
          const menu = data.site.siteMetadata.navLinks;
          return (
            <Context.Consumer>
              {({ section, setSection }) => (
                <>
                  {menu.map(item => {
                    if (item.button) {
                      return <MLButton
                                color="inherit"
                                onClick={() => setSection(item.url)}
                                style={{ marginLeft: 10 }}
                              >
                                {item.text}
                              </MLButton>
                    } else {
                      return <Button 
                                color="inherit" 
                                className={classes.menuLink}
                                onClick={() => setSection(item.url)}
                              >
                                {item.text}
                              </Button>
                    }
                  }
                  )}
                </>
              )}
            </Context.Consumer>
          )
        }}
      />
    )
  }
}


export default withStyles(desktopmenuStyle)(DesktopMenu)
