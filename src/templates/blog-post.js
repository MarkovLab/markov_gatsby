import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import withStyles from '@material-ui/core/styles/withStyles'

import Content, { HTMLContent } from 'components/Content'
import { LandingLayout as Layout } from 'components/Layout'

const BlogPostTemplateStyles = makeStyles({
  bodyText: {
    margin: '25px 0',
  },
  tags: {
    listStyle: 'none',
    display: 'flex',
  },
  tag: {
    margin: '0 15px',
  },
})

const BlogPostTemplate = ({
  title,
  date,
  description,
  content,
  contentComponent,
  tags,
  helmet,
  ...rest
}) => {
  const PostContent = contentComponent || Content
  const classes = BlogPostTemplateStyles()

  return (
    <Container {...rest}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="primary" gutterBottom>
        {date}
      </Typography>
      <Typography variant="body1" color="secondary" gutterBottom>
        {description}
      </Typography>
      <PostContent content={content} className={classes.bodyText} />
      {tags && (
        <div>
          <Typography variant="h5" gutterBottom>
            Tags
          </Typography>
          <ul className={classes.tags}>
            {tags.map(tag => (
              <li key={tag} className={classes.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BlogPostStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const BlogPost = ({ data, classes }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className={classes.content}>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
        />
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object,
}

export default withStyles(BlogPostStyles)(BlogPost)

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
