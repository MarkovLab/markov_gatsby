import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { withFirebase, isEmpty } from "react-redux-firebase";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import {
  ClickAwayListener,
  Popper,
  Grow,
  Paper,
  MenuItem,
  MenuList,
  ListItemIcon,
  Divider,
  Icon,
  Link
} from "@material-ui/core";

const styles = theme => ({
  icon: {
    fontSize: 20
  },
  itemIcon: {
    minWidth: 35
  },
  menuItem: {
    minWidth: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100vw"
    }
  },
  link: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  }
});

class CustomMenu extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  handleLogout = event => {
    this.props.firebase.logout().then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    const { menuOpen, handleClose, anchorEl, classes, auth } = this.props;

    return (
      <Popper
        open={menuOpen}
        transition
        disablePortal
        anchorEl={anchorEl}
        onClick={handleClose}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "left bottom" : "left bottom"
            }}
          >
            <Paper className={classes.menuItem}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {isEmpty(auth) && (
                    <Fragment>
                      <MenuItem>
                        <Link
                          underline="none"
                          to="/login"
                          component={RouterLink}
                          className={classes.link}
                        >
                          <ListItemIcon className={classes.itemIcon}>
                            <Icon
                              className={clsx(
                                classes.icon,
                                "fa fa-sign-in-alt"
                              )}
                            />
                          </ListItemIcon>
                          Login
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          underline="none"
                          to="/register"
                          component={RouterLink}
                          className={classes.link}
                        >
                          <ListItemIcon className={classes.itemIcon}>
                            <Icon
                              className={clsx(classes.icon, "fa fa-user-plus")}
                            />
                          </ListItemIcon>
                          Register
                        </Link>
                      </MenuItem>
                    </Fragment>
                  )}
                  {!isEmpty(auth) && (
                    <Fragment>
                      <MenuItem>
                        <Link
                          underline="none"
                          to="/user/990324/profile"
                          component={RouterLink}
                          className={classes.link}
                        >
                          <ListItemIcon className={classes.itemIcon}>
                            <Icon
                              className={clsx(classes.icon, "fa fa-user-alt")}
                            />
                          </ListItemIcon>
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          underline="none"
                          to="/user/990324/settings"
                          component={RouterLink}
                          className={classes.link}
                        >
                          <ListItemIcon className={classes.itemIcon}>
                            <Icon className={clsx(classes.icon, "fa fa-cog")} />
                          </ListItemIcon>
                          Settings
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={this.handleLogout}>
                        <ListItemIcon className={classes.itemIcon}>
                          <Icon
                            className={clsx(classes.icon, "fa fa-sign-out-alt")}
                          />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Fragment>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }
}

const mapStateToProps = ({ firebase: { auth } }) => {
  return {
    auth
  };
};

export default compose(
  withFirebase,
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(CustomMenu);
