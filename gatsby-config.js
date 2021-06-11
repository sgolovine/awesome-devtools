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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Lobster"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Devtools`,
        short_name: `Awesome Devtools`,
        start_url: `/`,
        background_color: `#2f323a`,
        theme_color: `#F3A712`,
        display: `browser`,
        icon: `src/images/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       globPatterns: [`/src/images/*`],
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
  ],
}
