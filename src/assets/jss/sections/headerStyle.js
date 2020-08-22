const headerStyle = theme => {
    return {
      header: {
        [theme.breakpoints.only('xs')]: {
          paddingTop: 100,
        },
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      headerText: {
        marginTop: '40%',
      },
      buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.only('xs')]: {
          flexDirection: 'column',
        },
      },
      subscribe: {
          width: '70%',
          marginTop: '8%'
      },
      slideDown: {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
  }

  export default headerStyle;