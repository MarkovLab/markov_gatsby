import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  cls: {
    fill: "#fff",
    stroke: "#fff",
    strokeMiterlimit: 10,
    strokeWidth: "11.14px"
  }
});

const LogiIcon = props => {
  const { classes } = props;
  return (
    <SvgIcon viewBox="0 0 250 250" {...props}>
      <g>
        <path
          className={classes.cls}
          d="M226.06,160.12A104,104,0,0,0,179,47.64a4,4,0,1,0-4.52,6.66l.29.18a96.08,96.08,0,0,1,43.67,102.86,28.16,28.16,0,1,0,7.6,2.78ZM212.72,205a20.13,20.13,0,1,1,20.12-20.13A20.12,20.12,0,0,1,212.72,205Z"
        />
        <path
          className={classes.cls}
          d="M161.17,225.8A96.42,96.42,0,0,1,55.93,204.6h0a28.07,28.07,0,1,0-6.44,4.9h0a104.4,104.4,0,0,0,114.75,23.72,4,4,0,0,0-3.07-7.42ZM15.82,184.88A20.12,20.12,0,1,1,35.94,205a20.12,20.12,0,0,1-20.12-20.12Z"
        />
        <path
          className={classes.cls}
          d="M23.85,133.5h.29a4,4,0,0,0,4-3.74A96,96,0,0,1,97.34,44.12a28.1,28.1,0,1,0-1.15-8,103.94,103.94,0,0,0-76.06,93.1A4,4,0,0,0,23.85,133.5ZM124.31,16.1a20.13,20.13,0,1,1-20.12,20.13A20.13,20.13,0,0,1,124.31,16.1Z"
        />
      </g>
    </SvgIcon>
  );
};

export default withStyles(styles)(LogiIcon);
