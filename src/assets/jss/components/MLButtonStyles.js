const MLButtonStyles = theme => {
  return {
    button: {
      fontFamily: theme.typography.title.fontFamily,
      borderWidth: 3,
      borderColor: 'white',
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        borderWidth: 3,
        borderColor: 'white',
        textDecoration: 'underline',
      },
    },
  }
}

export default MLButtonStyles
