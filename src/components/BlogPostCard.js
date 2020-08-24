import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'


class BlogPostCard extends Component {
  render() {
    const { title, subtitle, description, tags, author, datetime } = this.props
    return (
      <Card>
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <Typography variant="h5">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  datetime: PropTypes.string
}

export default BlogPostCard