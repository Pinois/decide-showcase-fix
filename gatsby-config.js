require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'DEC!DE',
    description:
      'DEC!DE propose un programme d’éducation à l’environnement qui a pour objectif d’induire des changements de comportement au travers d’une démarche transmédia.',
    author: 'DEC!DE ASBL',
  },
  pathPrefix: process.env.GATSBY_APP_DIR || '',
  plugins: [
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DEC!DE',
        short_name: 'DEC!DE',
        start_url: '/',
        background_color: `#ffff`,
        theme_color: `#f2931d`,
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
      },
    },
    'gatsby-plugin-offline',
  ],
}
