import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import withStyles from '@material-ui/core/styles/withStyles'

import Content, { HTMLContent } from 'components/Content'
import { LandingLayout as Layout } from 'components/Layout'

const NewsArticleTemplateStyles = makeStyles({
  bodyText: {
    margin: '25px 0',
  },
})

const NewsArticleTemplate = ({
  title,
  date,
  articleLink,
  content,
  contentComponent,
  helmet,
  ...rest
}) => {
  const PostContent = contentComponent || Content
  const classes = NewsArticleTemplateStyles()

  return (
    <Container {...rest}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="primary" gutterBottom>
        {date}
      </Typography>
      <PostContent content={content} className={classes.bodyText} />
      <Link href={articleLink}>Read More</Link>
    </Container>
  )
}

NewsArticleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const NewsArticleStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const NewsArticle = ({ data, classes }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className={classes.content}>
        <NewsArticleTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          articleLink={post.frontmatter.articleLink}
        />
      </div>
    </Layout>
  )
}

NewsArticle.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object,
}

export default withStyles(NewsArticleStyles)(NewsArticle)

export const pageQuery = graphql`
  query NewsArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        articleLink
      }
    }
  }
`
