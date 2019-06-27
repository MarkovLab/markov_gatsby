const SectionStyles = theme => ({
  section: {
    display: 'flex',
    padding: '45px 0',
    position: 'relative',
    backgroundColor: 'white',
  },
  shaded: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  fullScreen: {
    minHeight: '100vh',
  },
  image: {
    zIndex: 2,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '&:after': {
      background: 'rgb(0,0,0)',
      opacity: 0.5,
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
  },
})

export default SectionStyles
