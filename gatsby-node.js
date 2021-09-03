const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            titulo
            slug
            imagenPost {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
            descripcin {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)
  data.allContentfulPost.edges.forEach((edge) => {
    const slug = edge.node.slug
    actions.createPage({
      path: `${slug}`,
      component: path.resolve(`./src/templates/project-details.js`),
      context: { slug: slug },
    })
  })
}
