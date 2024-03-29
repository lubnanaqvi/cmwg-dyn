/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavToggle from "./layoutcomponents/NavToggle"
import Nav from "./layoutcomponents/Nav"
import Header from "./layoutcomponents/Header"
import Footer from "./layoutcomponents/Footer"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [navstatus, setNavstatus] = useState("closed")
  const changeNavStatus = () => {
    setNavstatus(navstatus === "closed" ? "open" : "closed")
  }
  const handleAppClick = e => {
    if (navstatus === "open") changeNavStatus()
  }

  return (
    <div onClick={handleAppClick}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavToggle
        isNavOpen={navstatus === "open"}
        handleClick={changeNavStatus}
      />
      <Nav showMe={navstatus === "open"} />

      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
