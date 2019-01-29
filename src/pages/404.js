import React from 'react'
import { Link } from 'gatsby';
import { Container } from 'reactstrap';
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <p>Uh oh! The page you're looking for does not exist. Click <Link to="/">here</Link> to go back to home page.</p>
    </Container>
  </Layout>
)

export default NotFoundPage;
