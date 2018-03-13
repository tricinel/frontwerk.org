module.exports = {
  siteMetadata: {
    title: 'Frontwerk',
    siteUrl: 'https://frontwerk.github.io',
    description: 'A zeroconfiguration toolset for frontend development',
    appVersion: '1.0.4',
    githubUrl: 'https://github.com/tricinel/frontwerk'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        name: 'markdown-docs'
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
    }
  ]
};
