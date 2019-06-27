const NavbarStyles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
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
    margin: 0,
  },
})

export default NavbarStyles
