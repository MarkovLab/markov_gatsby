import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, TextField } from "@material-ui/core";

import MLButton from "components/MLButton"

import subscribeformStyle from 'assets/jss/components/subscribeformStyle'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};


class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      success: false
    }
  }

  handleChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email } = this.state;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "subscribe-mailing-list",
        email
      })
    }).then(() => {
      this.setState({
        email: "",
        success: true
      });
    });
  };

  render() {
    const { classes } = this.props;
    const { email, success } = this.state;

    return (
      <>
        {success ? (
          <Typography variant="h6">
            Thank you!
          </Typography>
        ) : (
          <Typography variant="h6">
            Subscribe to our mailing list:
          </Typography>
        )}

        <form
          noValidate
          onSubmit={this.handleSubmit}
          name="subscribe-mailing-list"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={classes.form}
        >
          <input type="hidden" nam="form-name" value="subscribe-mailing-list" />
            <TextField
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
              placeholder="Your E-mail Address"
              inputProps={{
                style: {
                  color: "white",
                }
              }}
              InputProps={{
                style: {
                  borderBottom: "2px solid rgb(255,255,255)",
                }
              }}
              className={classes.email}
            />
            <MLButton size="large" variant="outlined" type="submit">
              Subscribe
            </MLButton>
        </form>
      </>
    )
  }
}

export default withStyles(subscribeformStyle)(SubscribeForm);
