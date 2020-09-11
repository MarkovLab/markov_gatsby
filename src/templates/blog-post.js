import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { Typography, Container, Grid, Chip } from '@material-ui/core'

import Section from 'components/Section'
import SEO from 'components/SEO'
import { LandingLayout } from 'components/Layout'
import Content, { HTMLContent } from 'components/Content'

import HeaderSection from 'sections/HeaderSection'
import blogposttemplateStyle from 'assets/jss/components/blogposttemplateStyle'

import 'assets/sass/main.sass'

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  author,
  date,
  featuredImage
}) => {
  const PostContent = contentComponent || Content

  return (
    <div id="blog-post">
      <Section halfScreen vcenter shaded image={featuredImage}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={7}>
              <Typography variant="h4" gutterBottom>{title}</Typography>
              <div >
                <Typography variant="h6" style={{
                display: 'inline'
              }}>{author} </Typography>
                <Typography variant="body1" style={{
                display: 'inline'
              }}>{date}</Typography>
              </div>
              <Typography variant="body2">
                {description}
              </Typography>
            </Grid>  
          </Grid>
        </Container>
      </Section>
      <Section id="blog-content">
        <PostContent content={content} />
      </Section>
      <Section hcenter vcenter>
        {tags.map((tag, key) => <Chip key={key} label={tag} />)}
      </Section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  featuredImage: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <LandingLayout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <BlogPostTemplate 
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
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
        title
        date(formatString: "MMMM DD, YYYY")
        author
        featuredimage
        description
        tags
      }
    }
  }
`