import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Typography, Container } from '@material-ui/core'
import Section from 'components/Section'
import BlogPostCard from 'components/BlogPostCard'


class BlogSection extends Component {
    render() {
        const { classes, data, ...rest } = this.props
        // const posts = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)

        return (
            <Section {...rest} title="Blog">
                <Container maxWidth="md">
                    {/* {posts.map(post => (BlogPostCard(post)))} */}
                </Container>
            </Section>
        )
    }
}

export default BlogSection

export const blogQuery = graphql`
    query blogQuery {
        allMarkdownRemark(filter: 
                {frontmatter: {templateKey: { eq: "blog-post" }}}) {
        edges {
            node {
            id
            frontmatter {
                title
                templateKey
                date
                featuredpost
                featuredimage
                description
            }
            }
        }
        }
    }
`