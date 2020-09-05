import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import withStyles from '@material-ui/core/styles/withStyles'
import { Typography, Card, Chip, Divider, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'

import blogPostCardStyle from 'assets/jss/components/blogpostcardStyle'


class BlogPostCard extends Component {
  render() {
    const { title, 
            date, 
            author, 
            image,
            tags,
            link,
            classes 
          } = this.props
      
    const event = new Date(Date.parse(date))
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          image={image}
          component={Link}
          to={link}
        />
        <CardContent>
          <Typography className={classes.title} variant="h6" component={Link} to={link}>
            {title}
          </Typography>
          {tags.map((tag, key) => <Chip key={key} size="small" label={tag} className={classes.chip} />)}
        </CardContent>
        <div className={classes.footer}>
          <Divider variant="middle" />
          <CardActions className={classes.cardActions}>
            <Typography variant="body2">
              {author}
            </Typography>
            <Typography variant="body2">
              {event.toLocaleDateString(undefined, options)}
            </Typography>
          </CardActions>
        </div>
      </Card>
    )
  }
}

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
}

export default withStyles(blogPostCardStyle)(BlogPostCard)