const footerStyles = theme => ({
  footer: {
    padding: '25px 15px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  fullFooter: {
    padding: '45px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '25px 0 5px 0',
    },
  },
  contact: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkHeader: {
    marginBottom: 15,
  },
  link: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  policyLinks: {
    display: 'flex',
  },
})

export default footerStyles
