import React from 'react';
import {
  Container,
  Card,
  CardBody
} from 'reactstrap'
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';

import Logo from '../assets/images/logos/ml-symbol.svg';

class Index extends React.Component {
    render() {
        return (
            <Layout>
              <Helmet>
                <title>Markov Lab - AI & Finance</title>
                <meta
                  name="description"
                  content="Markov Lab"
                />
                <meta
                  name="keywords"
                  content="AI, finance, reinforcement learning, machine learning"
                />
                <meta
                  name="author"
                  content="Richard Kim"
                />
              </Helmet>
              <Container>
                <div id="banner">
                <Card className="banner-card">
                  <CardBody>
                    <div className="banner-logo">
                      <img
                        src={Logo}
                        alt="Markov Lab"
                        className="banner-logo-symbol"
                      />
                      <span className="banner-logo-text">Markov Lab</span>
                    </div>
                    <h3 className="mission text-center">Collaborative online research platform for artificial intelligence across finance</h3>

                    <p className="text-center">Want to notified when we launch the service?</p>
                    <div
                      className="mx-auto subscribe-form"
                    >
                      <Subscribe />
                    </div>
                  </CardBody>
                </Card>
                </div>
              </Container>
            </Layout>
        )
    }
}

export default Index;
