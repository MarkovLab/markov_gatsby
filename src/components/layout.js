import React from 'react';
import Header from './Header';

import '../assets/sass/main.sass';

const Layout = ({ children }) => (
  <main className="main">
    <Header />
    {children}
  </main>
);

export default Layout;
