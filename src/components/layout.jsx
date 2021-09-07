import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import "./style.sass"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
