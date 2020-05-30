module.exports = {
  siteMetadata: {
    title: `Appendix`,
    description: `Documenting the graduation work of students at the Interior Architecture course at Konstfack, University of Arts, Crafts and Design. `,
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
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              wrapperStyle: "margin-top: 2rem;",
              width: 1000,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77

              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-top: 2rem;",
              showCaptions: true,
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
  ],
}

/* name: `pages`,
name: `images`, */
