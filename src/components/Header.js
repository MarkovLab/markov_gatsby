import React from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import Logo from '../assets/images/logos/ml-symbol.svg';

const Header = (props) => (
  <div>
    <Navbar id="navbar">
      <Container>
        <NavbarBrand href='/' className="brand">
          <img
            src={Logo}
            alt="Markov Lab"
            className="brand-logo"
          />
          <span className="brand-text">Markov Lab</span>
        </NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink
             className="contact-email"
             href="mailto:contact@markovlab.ai">
             contact@markovlab.ai
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default Header;
