require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'DEC!DE',
    description:
      'DEC!DE ASBL accompagne les entreprises belges dans leur transition écologique. Formations RSE, Fresque du Climat, Nudge et accompagnement ESG à Bruxelles et en Belgique.',
    author: 'DEC!DE ASBL',
    siteUrl: 'https://decideetvous.com',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/packages/themes/src/Startup/assets`,
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
    // SEO plugins
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://decideetvous.com',
        sitemap: 'https://decideetvous.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}
