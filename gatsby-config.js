const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Markov Lab',
    author: 'Richard Kim',
    email: "info@markovlab.ai",
    company: "Markov Lab, LLC",
    streetAddress: "186 Alewife Brook Pkwy",
    city: "Cambridge",
    state: "MA",
    zipCode: "02138",
    description: 'Markov Lab: Accelerate Machine Learning',
    navLinks: [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'Workstations',
        url: '/workstations/',
      },
      {
        text: 'Blog',
        url: '/blog/',
      },
      {
        text: 'FAQ',
        url: '/faq/',
      },
      {
        text: 'Contact Us',
        url: '/contact/',
        button: true
      }
    ]
    
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/assets/typography/index.js`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Markov Lab',
        short_name: 'Markov Lab',
        start_url: '/',
        background_color: '#00d2ff',
        theme_color: '#00d2ff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicons/ml-black-favicon.png', // This path is relative to the root of the site.
        icons: [
          {
            src: 'icons/icon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'icons/icon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        sections: path.join(__dirname, 'src/sections'),
        context: path.join(__dirname, 'src/context'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
