const navbarStyle = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    transparent: {
      backgroundColor: "rgba(0,0,0,0)",
      boxShadow: "none"
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
      alignSelf: 'center',
      flexGrow: 1,
    },
    link: {
      textDecoration: "none"
    },
    logoText: {
      color: 'white',
      margin: '-2px 0 0 5px',
    },

  })

  export default navbarStyle;