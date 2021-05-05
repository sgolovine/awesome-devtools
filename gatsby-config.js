module.exports = {
  siteMetadata: {
    title: `awesome-devtools`,
    description: `Website for awesome devtools`,
    author: `@sgolovine`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
  ],
}
