const desktopmenuStyle = theme => ({
    menuLink: {
      textTransform: 'capitalize',
      fontFamily: theme.typography.title.fontFamily,
      '&:hover': {
        backgroundColor: 'inherit'
      }
    },
})

export default desktopmenuStyle;