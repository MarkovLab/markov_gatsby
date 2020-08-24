import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Container, Fade } from "@material-ui/core"

import Section from 'components/Section'
import { LandingLayout } from 'components/Layout'
import HeaderSection from 'sections/HeaderSection'
import BlogSection from 'sections/BlogSection'

import bg from 'assets/images/background/bg2.jpg'
import blogpageStyle from 'assets/jss/pages/blogpageStyle'

class BlogPage extends Component {
    render() {
        const { classes } = this.props
        
        return (
            <LandingLayout>
                <HeaderSection image={bg} shaded title="Markov Lab Blog" />
                <Section>
                    <Typography variant="h4">
                        Blog
                    </Typography>
                </Section>
            </LandingLayout>
        )
    }
}

export default withStyles(blogpageStyle)(BlogPage)