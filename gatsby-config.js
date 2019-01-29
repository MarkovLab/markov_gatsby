module.exports = {
  siteMetadata: {
    title: "Markov Lab",
    author: "Richard Kim",
    description: "Markov Lab: Combining collective intelligence and artificial intelligence in finance"
  },
  plugins: [
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
        icon: 'src/assets/images/favicons/favicon-32x32.png', // This path is relative to the root of the site.
        icons: [
          {
            "src": "icons/icon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "icons/icon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          }
        ]
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
