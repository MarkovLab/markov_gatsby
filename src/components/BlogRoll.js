import React, { Component } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid, TextField } from "@material-ui/core"

import BlogPostCard from 'components/BlogPostCard'

const BlogRoll = () => {

  const data = useStaticQuery(graphql`
    query blogQuery {
      allMarkdownRemark(filter: 
        {frontmatter: {templateKey: { eq: "blog-post" }}}) {
      edges {
          node {
          id
          frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              author
              featuredimage
              description
              tags
          }
          fields {
            slug
          }
          }
      }
    }
  }`)
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  
  return (
    <>
      <Grid container spacing={2}>
      {posts.map(post => {
          const id = post.id
          const { title, date, author, featuredimage, description, tags } = post.frontmatter
          const { slug } = post.fields
          return (
            <Grid item xs={12} sm={6} md={4}>
              <BlogPostCard
                key={id}
                title={title}
                date={date}
                author={author}
                image={featuredimage}
                description={description}
                tags={tags}
                link={slug}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default BlogRoll