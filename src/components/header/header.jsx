import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/collapse.js"
import "./header.sass"

export function Header() {
  return (
    <div className="contenedor-nav">
      <ul className="nav nav-general">
        <li className="nav-item boton-nav">
          <a
            className="nav-link active boton-nav_contenido"
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item boton-nav">
          <a
            className="nav-link active boton-nav_contenido"
            aria-current="page"
            href="#"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
