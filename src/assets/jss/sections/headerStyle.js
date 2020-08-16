const headerStyle = theme => {
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
      subscribe: {
          width: '70%',
          marginTop: 200
      }
    }
  }

  export default headerStyle;