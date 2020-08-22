const footerStyle = theme => ({
    root: {
      flexGrow: 1,
    },
    footer: {
      color: 'white',
      padding: '25px 25px 25px 25px',
      backgroundColor: theme.palette.primary.main,
    },
    contact: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    bottom: {
      padding: "10px 0",
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  })

  export default footerStyle;