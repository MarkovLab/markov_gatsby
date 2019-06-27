const MLButtonStyles = theme => {
  return {
    button: {
      fontFamily: theme.typography.title.fontFamily,
      borderWidth: 5,
      borderColor: 'white',
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        borderColor: 'white',
        borderWidth: 5,
        textDecoration: 'underline',
      },
    },
  }
}

export default MLButtonStyles
