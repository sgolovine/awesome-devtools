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
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "6",
        matomoUrl: "https://stats.glvn.co",
        siteUrl: "https://awesomedevtools.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
  ],
}
