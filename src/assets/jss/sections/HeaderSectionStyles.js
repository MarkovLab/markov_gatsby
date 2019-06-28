const HeaderSectionStyles = theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      [theme.breakpoints.only('xs')]: {
        paddingTop: 100,
      },
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        flexDirection: 'column',
      },
    },
  }
}

export default HeaderSectionStyles
