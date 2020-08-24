import React from 'react'
import PropTypes from 'prop-types'

import { graphql, Link } from 'gatsby'

import { LandingLayout } from 'components/Layout'


const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent

  return (
    <section>
        {title} 
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string
}


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <LandingLayout>
      <BlogPostTemplate 
        title={post.frontmatter.title}
      />
    </LandingLayout>
  )
}

export { BlogPostTemplate }
export default BlogPost


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