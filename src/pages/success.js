import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'reactstrap';

import Layout from '../components/Layout';

const Success = () => (
  <Layout>
    <Container>
      <p>Thank you for joining our mailing.  We will contact you as we get closer to the launch date. <Link to="/">Back</Link></p>
    </Container>
  </Layout>
);

export default Success;
