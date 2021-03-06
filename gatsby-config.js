module.exports = {
  siteMetadata: {
    title: `Morphic`,
    description: `News and docs about Morphic`,
    siteUrl: `https://morphic.world` 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          opengraph: true,
          windows: true,
        },
      },
    },
  ],
}