const subscribeformStyle = theme => ({
    form: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    email: {
        marginRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginBottom: 15
        }
    }
  })

  export default subscribeformStyle;