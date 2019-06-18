import React, { Component } from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Button, TextField } from '@material-ui/core'

import MLButton from 'components/MLButton'

import bg from 'assets/images/background/bg1.jpg'

const styles = theme => {
  return {
    section: {
      height: '90vh',
      display: 'flex',
      padding: '55px 0',
      position: 'relative',
    },
    requestForm: {
      maxWidth: 800,
      padding: 25,
      backgroundColor: 'rgba(40,40,40,0.9)',
      color: 'inherit',
    },
    AISolution: {
      zIndex: 2,
      minHeight: 350,
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    shaded: {
      '&:after': {
        background: 'rgb(0, 0, 0)',
        opacity: 0.4,
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
    white: {
      color: 'white',
    },
    menu: {
      width: 200,
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

  handleSubmit = async event => {
    event.preventDefault()

    const items = ['firstName', 'lastName', 'email', 'companyName']

    await items.map(item => {
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
    const { classes, ...rest } = this.props
    return (
      <section
        className={classNames(
          classes.section,
          classes.AISolution,
          classes.shaded,
          classes.white
        )}
        {...rest}
      >
        <Grid container spacing={2} justify="center">
          <Grid item xs={11} md={5}>
            <Typography variant="h3">Request Demo</Typography>
          </Grid>
          <Grid item xs={11} sm={9} md={6}>
            {success ? (
              <Typography variant="body1">
                Thank you for indicating your interest. Our representative will
                contact you shortly.
              </Typography>
            ) : (
              <form
                noValidate
                className={classNames(classes.requestForm, classes.white)}
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
                      helperText={
                        errors.companyName && 'Company Name is required'
                      }
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
                  <Grid item xs={12} md={8}>
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
          </Grid>
        </Grid>
      </section>
    )
  }
}

export default withStyles(styles)(RequestDemoSection)
