import React, { Component } from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Grid, TextField } from "@material-ui/core";

import MLButton from "components/MLButton";

import styles from "assets/jss/components/contactformStyles"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const defaultState = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  success: false,
  errors: {
    name: false,
    email: false,
    organization: false,
    subject: false,
    message: false
  }
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleChange = name => event => {
    if (this.state.errors[name]) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: false
        }
      }));
    }

    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const items = ["name", "email", "subject", "message"];

    await items.forEach(item => {
      if (this.state[item] === "") {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [item]: true
          }
        }));
      }
    });

    const errorValues = Object.values(this.state.errors);
    if (errorValues.every(v => !v)) {
      const { name, email, subject, message } = this.state;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-us",
          name,
          email,
          subject,
          message
        })
      }).then(() => {
        this.setState({ ...defaultState, success: true });
      });
    }
  };

  render() {
    const { name, email, organization, subject, message, errors, success } = this.state;
    const { classes } = this.props;
    
    return (
      <div className={clsx(classes.requestForm)}>
        {success ? (
          <>
            <Typography variant="body1" align="center">
              Thank you for contacting us! We will contact you shortly.
            </Typography>
          </>
        ) : (
          <form
            noValidate
            onSubmit={this.handleSubmit}
            name="contact-us"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            <Grid container spacing={1} justify="center">
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Your Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  fullWidth
                  error={errors.name}
                  helperText={errors.name && "Your Name is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  fullWidth
                  error={errors.email}
                  helperText={errors.email && "Email is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="organization"
                  label="Organization"
                  name="organization"
                  value={organization}
                  onChange={this.handleChange("organization")}
                  margin="normal"
                  fullWidth
                  error={errors.organization}
                  helperText={errors.email && "Email is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={subject}
                  onChange={this.handleChange("subject")}
                  margin="normal"
                  fullWidth
                  error={errors.subject}
                  helperText={errors.subject && "Subject is required"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows="8"
                  value={message}
                  onChange={this.handleChange("message")}
                  margin="normal"
                  fullWidth
                  error={errors.subject}
                  helperText={errors.subject && "Message is required"}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
              >
                <MLButton
                  size="large"
                  fullWidth
                  type="submit"
                  filled
                >
                  Submit
                </MLButton>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ContactForm);
