import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Typography, Container } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

import Content, { HTMLContent } from 'components/Content'
import { LandingLayout as Layout } from 'components/Layout'

const PolicyPageStyles = theme => ({
  content: {
    paddingTop: 90,
    minHeight: '90vh',
  },
})

const PolicyPageTemplateStyles = theme => ({
  bodyText: {
    marginTop: 25,
    marginBottom: 25,
  },
})

let PolicyPageTemplate = ({
  title,
  date,
  content,
  contentComponent,
  classes,
  ...rest
}) => {
  const PageContent = contentComponent || Content

  return (
    <Container {...rest}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Last revised: {date}
      </Typography>
      <PageContent className={classes.bodyText} content={content} />
    </Container>
  )
}
PolicyPageTemplate = withStyles(PolicyPageTemplateStyles)(PolicyPageTemplate)

export { PolicyPageTemplate }

PolicyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PolicyPage = ({ data, classes }) => {
  const { markdownRemark: page } = data
  return (
    <Layout>
      <div className={classes.content}>
        <PolicyPageTemplate
          title={page.frontmatter.title}
          date={page.frontmatter.date}
          content={page.html}
          contentComponent={HTMLContent}
        />
      </div>
    </Layout>
  )
}

PolicyPage.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object,
}

export default withStyles(PolicyPageStyles)(PolicyPage)

export const policyPageQuery = graphql`
  query PolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
