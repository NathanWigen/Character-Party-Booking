import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className="layout-main">{props.children}</main>
      <Footer />
    </>
  )
}
