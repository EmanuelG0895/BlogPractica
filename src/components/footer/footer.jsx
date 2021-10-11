import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.sass"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer">
        <div className="contenedor-footer">
          <div className="social-media">
            <div className="facebook">
              <a href="https://www.facebook.com/">
                <StaticImage
                  className="social_media-icon"
                  src="../../images/facebook.svg"
                />
              </a>
            </div>
            <div className="instagram">
              <StaticImage
                className="social_media-icon"
                src="../../images/instagram.svg"
              />
            </div>
            <div className="email">
              <StaticImage
                className="social_media-icon"
                src="../../images/email.svg"
              />
            </div>
          </div>
          <div className="copyright">
            <p>© emanuel garcia jimenez</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
