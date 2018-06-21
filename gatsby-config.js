module.exports = {
  siteMetadata: {
    title: 'Frontwerk',
    siteUrl: 'https://frontwerk.github.io',
    description: 'A zeroconfiguration toolset for frontend development',
    appVersion: '2.1.1',
    githubUrl: 'https://github.com/tricinel/frontwerk'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/layouts/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/docs`,
        name: 'docs'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frontwerk Docs',
        short_name: 'Frontwerk',
        start_url: '/',
        background_color: '#10bc9b',
        theme_color: '#34485e',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  ]
};
