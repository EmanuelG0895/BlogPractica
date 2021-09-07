import React from "react"
import { graphql } from "gatsby"
import { TarjetaPost } from "../components/tarjetaPost/tarjetaPost"
import Layout from "../components/layout"
import ColumnaDerecha from "../components/columnaDerecha/columna-derecha"

const index = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="leftcolumn">
            {posts.map((post, index) => (
              <TarjetaPost post={post} key={index}></TarjetaPost>
            ))}
          </div>
          <div className="rightcolumn">
            <ColumnaDerecha></ColumnaDerecha>
          </div>
        </div>
      </div>
    </Layout>
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
              excerpt(pruneLength: 200)
              html
              parent {
                internal {
                  content
                }
              }
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
