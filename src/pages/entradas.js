import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Entradas = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <div>
      <h2>hola mundo</h2>
      {posts.map((post, index) => {
        const image = getImage(post.node.imagenPost)
        return (
          <Link to={`/${post.node.slug}`} key={index}>
            <div>{post.node.titulo}</div>
            <GatsbyImage image={image} />
          </Link>
        )
      })}
    </div>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          slug
          titulo
          imagenPost {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default Entradas
