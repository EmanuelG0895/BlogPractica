import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../style.css"

const index = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <div className="">
      <h2 className="header">Mira las ultimas entradas</h2>
      <div className="row">
        <div className="leftcolumn">
          {posts.map((post, index) => {
            const image = getImage(post.node.imagenPost)
            return (
              <Link to={`/${post.node.slug}`} key={index}>
                <div className="card">
                  <h2 className="titulo-entrada">{post.node.titulo}</h2>
                  <p className="fecha-post">{post.node.updatedAt}</p>
                  <GatsbyImage className="blog-img" image={image} />
                </div>
              </Link>
            )
          })}
        </div>
        <div className="rightcolumn">
          <div class="card">
            <h3>Follow Me</h3>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
          </div>
          <div />
        </div>
      </div>
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
          updatedAt(formatString: "DD/MM/YYYY")
          descripcin {
            childMarkdownRemark {
              html
            }
          }
          imagenPost {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default index
