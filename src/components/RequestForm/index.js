import React, { Component } from 'react'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, TextField } from '@material-ui/core'

import MLButton from 'components/MLButton'

const styles = theme => {
  return {
    requestForm: {
      maxWidth: 1000,
      padding: 25,
      backgroundColor: 'rgba(40,40,40,0.9)',
      color: 'inherit',
    },
    white: {
      color: 'white',
    },
    select: {
      borderBottom: '1px solid #fff',
    },
  }
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const occupations = [
  'Portfolio Manager',
  'Trader',
  'Researcher',
  'Analyst',
  'Other',
]

const employerSizes = [
  '1 - 2',
  '3 - 10',
  '11 - 50',
  '51 - 250',
  '251 - 1000',
  '> 1000',
]

const aumSizes = [
  '< $100 million',
  '$100 million < $500 million',
  '$500 million < $2 billion',
  '$2 billion < $50 billion',
  '> $50 billion',
  'Not Applicable',
]

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  occupation: '',
  employerSize: '',
  aumSize: '',
  success: false,
  errors: {
    firstName: false,
    lastName: false,
    email: false,
    companyName: false,
  },
}

class RequestForm extends Component {
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

  handleSubmit = async event => {
    event.preventDefault()

    const items = ['firstName', 'lastName', 'email', 'companyName']

    await items.forEach(item => {
      if (this.state[item] === '') {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [item]: true,
          },
        }))
      }
    })

    const errorValues = Object.values(this.state.errors)
    if (errorValues.every(v => !v)) {
      const {
        firstName,
        lastName,
        email,
        companyName,
        occupation,
        employerSize,
        aumSize,
      } = this.state
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
          employerSize,
          aumSize,
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
      employerSize,
      aumSize,
    } = this.state
    const { classes } = this.props
    return (
      <div className={clsx(classes.requestForm, classes.white)}>
        {success ? (
          <Typography variant="body1" align="center">
            Thank you for indicating your interest. Our representative will
            contact you shortly.
          </Typography>
        ) : (
          <form
            noValidate
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
                  error={errors.firstName}
                  helperText={errors.firstName && 'First Name is required'}
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
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
                  error={errors.lastName}
                  helperText={errors.lastName && 'Last Name is required'}
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
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
                  error={errors.email}
                  helperText={errors.email && 'Email is required'}
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
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
                  error={errors.companyName}
                  helperText={errors.companyName && 'Company Name is required'}
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="occupation"
                  select
                  label="Occupation"
                  name="occupation"
                  value={occupation}
                  onChange={this.handleChange('occupation')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                    classes: {
                      icon: classes.white,
                    },
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
                >
                  <option key="Default" value="" disabled />
                  {occupations.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="employerSize"
                  select
                  label="Employer Size"
                  name="employerSize"
                  value={employerSize}
                  onChange={this.handleChange('employerSize')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                    classes: {
                      icon: classes.white,
                    },
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
                >
                  <option key="Default" value="" disabled />
                  {employerSizes.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="aumSize"
                  select
                  label="AUM of Firm"
                  name="aumSize"
                  value={aumSize}
                  onChange={this.handleChange('aumSize')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'inherit',
                    },
                  }}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                    classes: {
                      icon: classes.white,
                    },
                    style: {
                      color: 'inherit',
                      borderBottom: '1px solid #fff',
                    },
                  }}
                >
                  <option key="Default" value="" disabled />
                  {aumSizes.map(option => (
                    <option key={option} value={option}>
                      {option}
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
                <MLButton
                  size="large"
                  variant="outlined"
                  fullWidth
                  type="submit"
                >
                  Submit
                </MLButton>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(RequestForm)
