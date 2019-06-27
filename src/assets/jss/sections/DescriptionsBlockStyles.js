const DescriptionBlockStyles = theme => {
  return {
    block: {
      margin: '0px 15px 35px 15px',
      display: 'block',
    },
    card: {
      padding: 35,
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
    },
    cardImage: {
      padding: 35,
      margin: 0,
      [theme.breakpoints.down('md')]: {
        padding: 25,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 15,
      },
    },
  }
}

export default DescriptionBlockStyles
