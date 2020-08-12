const mlbuttonStyle = theme => {
    return {
      button: {
        fontFamily: theme.typography.title.fontFamily,
        borderWidth: 5,
        borderColor: 'white',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover': {
          borderColor: 'white',
          borderWidth: 5,
          backgroundColor: "rgba(0,0,0,0.2)"
        },
      },
    }
  }

  export default mlbuttonStyle;