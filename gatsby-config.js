module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "JBCtY9vDiGuEYWWGV0y8GPycOeb_Ai_Am11JSvKvdTY",
        spaceId: "lt7586w3ap3b",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    "gatsby-plugin-sass",
  ],
}
