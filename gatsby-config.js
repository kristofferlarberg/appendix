module.exports = {
  /* pathPrefix: `/appendix`, */
  siteMetadata: {
    title: `Appendix`,
    description: `Documentation of the graduation projects from students at the Interior Architecture course at Konstfack, University of Arts, Crafts and Design. `,
    author: `Kristoffer Larberg, Per Sturesson`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Appendix`,
        short_name: `Appendix`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `blue`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              height: "auto",
              linkImagesToOriginal: false,
              wrapperStyle: "margin: 2rem 0 0 0;",
              markdownCaptions: true,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        remarkPlugins: [require('remark-unwrap-images')],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              height: "auto",
              linkImagesToOriginal: false,
              wrapperStyle: "margin: 2rem 0 0 0;",
              markdownCaptions: false,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },  
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/students`,
      },
    },
  ],
}
