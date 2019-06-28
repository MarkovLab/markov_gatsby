import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import { LandingLayout as Layout } from 'components/Layout'

const NewsPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const NewsMainPage = ({ data, classes }) => {
  const { allMarkdownRemark: articles } = data
  console.log(articles)
  return (
    <Layout>
      <div className={classes.content}>
        <Typography variant="h1">News</Typography>
      </div>
    </Layout>
  )
}

export default withStyles(NewsPageStyles)(NewsMainPage)

export const newsQuery = graphql`
  query NewsArticle {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`
