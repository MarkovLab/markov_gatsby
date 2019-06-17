import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  TextField,
  Button,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    color: 'white',
    padding: '25px 25px 25px 25px',
    backgroundColor: 'black',
  },
  subscribeInput: {
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'gray',
  },
})

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">&copy; 2019 Markov Lab Inc.</Typography>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(Footer)
