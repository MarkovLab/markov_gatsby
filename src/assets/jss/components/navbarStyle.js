const navbarStyle = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
      flexGrow: 1,
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
    logo: {
      display: 'flex',
      alignSelf: 'center'
    },
    logoText: {
      color: 'white',
      margin: '-2px 0 0 5px',
    },

  })

  export default navbarStyle;