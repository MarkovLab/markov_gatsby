import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Button, TextField } from '@material-ui/core'

const styles = theme => {
  return {
    section: {
      minHeight: 350,
      display: 'flex',
      padding: '25px 0',
      position: 'relative',
    },
    requestForm: {
      maxWidth: 800,
    },
  }
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const occupations = [
  {
    value: 'portfolio-manager',
    label: 'Portfolio Manager',
  },
  {
    value: 'trader',
    label: 'Trader',
  },
  {
    value: 'researcher',
    label: 'Researcher',
  },
  {
    value: 'analyst',
    label: 'Analyst',
  },
  {
    value: 'other',
    label: 'Other',
  },
]

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  occupation: '',
  success: false,
  errors: {
    firstName: false,
    lastName: false,
    email: false,
    companyName: false,
  },
}

class RequestDemoSection extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  handleChange = name => event => {
    if (this.state.errors[name]) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [name]: false,
        },
      }))
    }

    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const items = ['firstName', 'lastName', 'email', 'companyName']

    items.map(item => {
      if (this.state[item] === '') {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [item]: true,
          },
        }))
      }
    })

    const errorItems = items.filter(item => this.state.errors[item])
    if (errorItems.length === 0) {
      const { firstName, lastName, email, companyName, occupation } = this.state
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'request-demo',
          firstName,
          lastName,
          email,
          companyName,
          occupation,
        }),
      }).then(() => {
        this.setState({ ...defaultState, success: true })
      })
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      companyName,
      occupation,
      errors,
      success,
    } = this.state
    const { classes } = this.props
    return (
      <section className={classes.section} id="request-demo">
        <Grid container spacing={2} justify="center">
          <Grid item xs={11} md={5}>
            <Typography variant="h6">Request Demo</Typography>
          </Grid>
          <Grid item xs={11} sm={9} md={6}>
            {success ? (
              <Typography variant="body1">
                Thank you. Our representative will contact you shortly.
              </Typography>
            ) : (
              <form
                noValidate
                className={classes.requestForm}
                onSubmit={this.handleSubmit}
                name="request-demo"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="request-demo" />
                <Grid container spacing={1} justify="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="first-name"
                      label="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={this.handleChange('firstName')}
                      margin="normal"
                      fullWidth
                      required
                      error={errors.firstName}
                      helperText={errors.firstName && 'First Name is required'}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="last-name"
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={this.handleChange('lastName')}
                      margin="normal"
                      fullWidth
                      required
                      error={errors.lastName}
                      helperText={errors.lastName && 'Last Name is required'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={this.handleChange('email')}
                      margin="normal"
                      fullWidth
                      required
                      error={errors.email}
                      helperText={errors.email && 'Email is required'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="company"
                      label="Company Name"
                      name="companyName"
                      value={companyName}
                      onChange={this.handleChange('companyName')}
                      margin="normal"
                      fullWidth
                      required
                      error={errors.companyName}
                      helperText={
                        errors.companyName && 'Company Name is required'
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      id="occupation"
                      select
                      label="Occupation"
                      name="company"
                      value={occupation}
                      onChange={this.handleChange('occupation')}
                      SelectProps={{
                        native: true,
                      }}
                      margin="normal"
                      fullWidth
                    >
                      <option key="Default" value="" disabled />
                      {occupations.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      size="large"
                      variant="outlined"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Grid>
        </Grid>
      </section>
    )
  }
}

export default withStyles(styles)(RequestDemoSection)
