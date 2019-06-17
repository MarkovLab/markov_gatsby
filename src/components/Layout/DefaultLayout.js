import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  container: {
    paddingTop: 75,
    minHeight: "90vh"
  }
});

const DefaultLayout = ({ children, classes }) => {
  return (
    <Grid container spacing={8} justify="center" className={classes.container}>
      <Grid item xs={11}>
        {children}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(DefaultLayout);
