import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Link, Grid } from "@material-ui/core";

import Section from 'components/Section'
import SubscribeForm from 'components/SubscribeForm';
import SocialMedia from 'components/SocialMedia';

import footerStyle from "assets/jss/components/footerStyle";

const Footer = ({ classes }) => {
  const data = useStaticQuery(graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
            email
            company
            streetAddress
            city
            state
            zipCode
          }
        }
      }
    `)
  const metadata = data.site.siteMetadata;
  const date = new Date();

  return (
    <footer>
      <Section shaded>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item lg={8} md={7} sm={6} xs={12} className={classes.item}>
              <Typography variant="h5" color="inherit" gutterBottom>
                {metadata.company}
              </Typography>
              <Typography variant="body1" color="inherit">
                {metadata.streetAddress}
              </Typography>
              <Typography variant="body1" color="inherit">
                {metadata.city}, {metadata.state} {metadata.zipCode}
              </Typography>
              <br />
              <Link
                href={`mailto:${metadata.email}`}
                variant="body1"
                color="inherit"
              >
                {metadata.email}
              </Link>
            </Grid>
            <Grid item lg={4} md={5} sm={6} xs={12} className={classes.item}>
              <SubscribeForm />
              <SocialMedia />
            </Grid>
          </Grid>
        </Container>
      </Section>
      <section className={classes.bottom}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12}>
              <Typography variant="body1" color="inherit">
                &copy;{date.getFullYear()} {metadata.company} All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
  </footer>
  )
}

export default withStyles(footerStyle)(Footer);
