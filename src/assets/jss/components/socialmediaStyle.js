const socialmediaStyle = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-around'
      }
    },
    item: {
      marginRight: 5,
      color: 'inherit',
      '&:hover': {
          color: theme.palette.secondary.main
      }
    }
})

export default socialmediaStyle;

