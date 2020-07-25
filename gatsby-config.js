/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `We Write Digital`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem', /* This imports the blog data */
      options: {
        path: `${__dirname}/src/pages/blogs`,
        name: 'pages',
      }
    },
    {
      resolve: 'gatsby-source-filesystem', /* This imports the blog data */
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      }
    },
    'gatsby-transformer-remark' /* This transforms MD to HTML -- When do you use single quotes versus backticks in Gatsby/React? */
  ],
}

