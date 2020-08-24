const sectionStyle = theme => ({
  section: {
    display: "flex",
    padding: "45px 0",
    position: "relative",
    backgroundColor: "white"
  },
  shaded: {
    color: "white",
    backgroundColor: "rgba(10, 10, 10, 0.9)"
  },
  fullScreen: {
    minHeight: "100vh"
  },
  halfScreen: {
    minHeight: "50vh"
  },
  image: {
    zIndex: 2,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:after": {
      background: "rgb(0, 0, 0)",
      opacity: 0.5,
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  subtitle: {
    fontWeight: "bold",
    width: "85%",
    alignSelf: "center"
  },
  vcenter: {
    justifyContent: "center"
  },
  hcenter: {
    alignItems: "center",
  }
});

export default sectionStyle;
