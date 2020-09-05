import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Typography, Container } from '@material-ui/core'

import Section from 'components/Section'
import BlogRoll from 'components/BlogRoll'

class BlogSection extends Component {
    render() {
        const { classes, data, ...rest } = this.props
        // const posts = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
        console.log(data)
        return (
            <Section {...rest}
                title="Blog">
                <Container maxWidth="lg">
                    <BlogRoll />
                    <Link to="/blog/">Read More</Link>
                </Container>
                
            </Section>
        )
    }
}

export default BlogSection