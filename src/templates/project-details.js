import React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.contentfulPost
  return (
    <Layout>
      <div className="container post-completo">
        <div className="titulo-post">
          <h3>{post.titulo}</h3>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: post.descripcin.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      titulo
      slug
      descripcin {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export { BlogPost }
