const React, { Component } from 'react'
import classNames from 'classNames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Grid, Button, TextField } from '@material-ui/core'

import MLButton from 'components/MLButton'

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

class RequestForm extends Component {
  constructor(props) {
    super(props);

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

  }
}
