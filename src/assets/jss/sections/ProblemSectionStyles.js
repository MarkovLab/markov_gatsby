import { imgRaised, imgRounded } from '../markov-lab-react'

const ProblemSectionStyles = theme => ({
  imgRaised,
  imgRounded,
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item1: {
    order: 1,
  },
  item2: {
    order: 2,
  },
  item3: {
    order: 3,
    [theme.breakpoints.down('sm')]: {
      order: 4,
    },
  },
  item4: {
    order: 4,
    [theme.breakpoints.down('sm')]: {
      order: 3,
    },
  },
  item5: {
    order: 5,
  },
  item6: {
    order: 6,
  },
})

export default ProblemSectionStyles
