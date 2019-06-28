import {
  imgRaised,
  imgRounded,
  greenText,
  indigoText,
  deepOrangeText,
} from '../markov-lab-react'

const BenefitsBlockStyles = theme => {
  return {
    block: {
      margin: '35px 15px',
      display: 'block',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    card: {
      padding: 35,
    },
    cardImage: {
      padding: 25,
      margin: 0,
    },
    benefit: {
      display: 'flex',
      marginTop: 15,
      marginBottom: 15,
    },
    iconSection: {
      width: theme.spacing(12),
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(18),
      },
    },
    icon: {
      width: '100%',
    },
    paddingRight: {
      paddingRight: 25,
    },
    greenText,
    indigoText,
    deepOrangeText,
    imgRaised,
    imgRounded,
  }
}

export default BenefitsBlockStyles
