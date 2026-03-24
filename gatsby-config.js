require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
  {
    resolve: "gatsby-plugin-styled-components",
    options: {},
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    },
  },

  {
  resolve: "gatsby-plugin-image",
},
{
  resolve: "gatsby-plugin-sharp",
},
{
  resolve: "gatsby-transformer-sharp",
},

]
}
