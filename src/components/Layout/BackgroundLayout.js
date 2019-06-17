import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  black: {
    backgroundColor: "#000",
    height: "100vh"
  },
  bgImage: {
    height: "100vh",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

const BackgroundLayout = ({ children, classes, bg }) => {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${bg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return (
    <div className={classNames(classes.black, classes.container)}>
      <div className={classes.bgImage} style={style}>
        {children}
      </div>
    </div>
  );
};

export default withStyles(styles)(BackgroundLayout);
