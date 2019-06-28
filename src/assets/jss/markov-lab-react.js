import {
  grey,
  purple,
  green,
  deepOrange,
  indigo,
} from '@material-ui/core/colors'

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[500],
      main: grey[900],
      dark: '#000000',
      contrastText: 'white',
    },
    secondary: {
      main: purple[900],
      contrastText: 'white',
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Hammersmith One'",
    },
    h2: {
      fontFamily: "'Hammersmith One'",
    },
    h3: {
      fontFamily: "'Hammersmith One'",
    },
    h4: {
      fontFamily: "'Hammersmith One'",
    },
    h5: {
      fontFamily: "'Hammersmith One'",
    },
    h6: {
      fontFamily: "'Hammersmith One'",
    },
    title: {
      fontFamily: "'Hammersmith One'",
    },
  },
  shape: {
    borderRadius: 0,
  },
})

const imgRaised = {
  boxShadow:
    '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
}

const imgRounded = {
  borderRadius: '6px !important',
}

const greenText = {
  color: green[900],
}

const indigoText = {
  color: indigo[800],
}

const deepOrangeText = {
  color: deepOrange[900],
}

export { theme, imgRaised, imgRounded, greenText, indigoText, deepOrangeText }
