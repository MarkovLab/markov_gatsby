import React from 'react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LandingLayout
