import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "./tarjetaPost.sass"

const TarjetaPost = ({ post }) => {
  const image = getImage(post.node.imagenPost)

  return (
    <Link to={`/${post.node.slug}`}>
      <div className="card">
        <GatsbyImage className="blog-img" image={image} />
        <h2 className="titulo-entrada">{post.node.titulo}</h2>
        <p className="extracto-entrada">
          {post.node.descripcin.childMarkdownRemark.excerpt}
        </p>
        <p className="fecha-post">{post.node.updatedAt}</p>
      </div>
    </Link>
  )
}

export { TarjetaPost }
