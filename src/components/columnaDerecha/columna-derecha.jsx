import React from "react"
import "./columna-derecha.sass"

const ColumnaDerecha = () => {
  return (
    <div>
      <div className="about-me">
        <h5> About Me </h5>
        <p>
          Sed pellentesque nibh enim, quis euismod enim lacinia nec. Phasellus
          quam diam, semper in erat eu. Consectetur adipiscing elit. Sed
          pellentesque nibh enim, quis euismod enim lacinia nec.
        </p>
      </div>
      <div className="ultimo-post">
        <div className="card">
          <h5> Ultimo post </h5>
          <p>titulo del post</p>
          <p>Fecha post</p>
        </div>
      </div>
      <div />
    </div>
  )
}

export default ColumnaDerecha
