const DesktopMenuStyles = theme => ({
  menuLink: {
    textTransform: 'capitalize',
    fontFamily: theme.typography.title.fontFamily,
  },
  subMenuLink: {
    '&:hover': {
      textDecoration: 'none',
    },
    color: theme.palette.secondary.main,
  },
  subMenuText: {
    fontFamily: theme.typography.title.fontFamily,
  },
})

export default DesktopMenuStyles
